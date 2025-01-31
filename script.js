var outputElement = document.getElementById("output");
var runButton = document.getElementById("runButton");

// WASM モジュールを明示的にロード
var Module = {
    onRuntimeInitialized: function() {
        console.log("WASM Loaded!");
        runButton.disabled = false; // WASM がロードされたらボタンを有効化
    },

    print: function(text) {
        console.log(text); // C の出力をコンソールに表示
        outputElement.textContent += text + "\n"; // HTML にも表示
    },

    printErr: function(text) {
        console.error(text);
    }
};

// WebAssembly をロード
fetch("program.wasm")
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.instantiate(buffer, { env: {} }))
    .then(module => {
        Module.instance = module.instance;
        console.log("WASM Ready!");
        runButton.disabled = false; // ボタンを有効化
    })
    .catch(error => console.error("Error loading WASM:", error));

function runCCode() {
    console.log("Running C program...");
    outputElement.textContent = ""; // 出力をクリア
    if (Module.instance && Module.instance.exports._main) {
        Module.instance.exports._main(); // C の main() を実行
    } else {
        console.error("WASM module is not initialized.");
    }
}
