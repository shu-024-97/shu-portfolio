var outputElement = document.getElementById("output");
var runButton = document.getElementById("runButton");

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
    },

    stdin: function() {
        return null; // `scanf()` の入力を無効化（ポップアップ防止）
    }
};

function runCCode() {
    console.log("Running C program...");
    outputElement.textContent = ""; // 画面の出力をリセット
    Module._main(); // C のメイン関数を実行
}
