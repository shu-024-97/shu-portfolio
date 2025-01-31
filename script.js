var outputElement = document.getElementById("output");

var Module = {
    onRuntimeInitialized: function() {
        console.log("WASM Loaded!");
        document.getElementById("runButton").disabled = false; // ボタンを有効化
    },

    print: function(text) {
        console.log(text); // C の出力をコンソールにも表示
        outputElement.textContent += text + "\n"; // HTML にも出力
    },

    printErr: function(text) {
        console.error(text);
    },

    stdin: function() {
        return null; // `scanf()` の入力を無効化（ポップアップを防ぐ）
    }
};

function runCCode() {
    console.log("Running C program...");
    outputElement.textContent = ""; // 画面の出力をリセット
    Module._main(); // C のメイン関数を実行
}
