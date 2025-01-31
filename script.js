var outputElement = document.getElementById("output");
var runButton = document.getElementById("runButton");

// WASM モジュールを明示的にロード
if (!window.Module) {
    var Module = {
        onRuntimeInitialized: function() {
            console.log("WASM Loaded!");
            document.getElementById("runButton").disabled = false; // ボタンを有効化
        },
        print: function(text) {
            console.log(text);
            document.getElementById("output").textContent += text + "\n";
        },
        printErr: function(text) {
            console.error(text);
        }
    };
}


// WebAssembly をロード
fetch("program.wasm")
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {
        env: {}, // 必要なら関数を追加
        wasi_snapshot_preview1: {} // ここを追加
    }))
    .then(results => {
        Module.instance = results.instance;
        console.log("WASM Ready!");
        document.getElementById("runButton").disabled = false;
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
