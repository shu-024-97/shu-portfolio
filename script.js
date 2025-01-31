var Module = {
    onRuntimeInitialized: function() {
        console.log("WASM Loaded!");
        document.getElementById("runButton").disabled = false; // 実行ボタンを有効化
    },
    
    preRun: [],
    postRun: [],
    
    print: function(text) {
        console.log(text); // WASM の出力をコンソールに表示
    },
    
    printErr: function(text) {
        console.error(text); // エラー出力をコンソールに表示
    },

    stdin: function() {
        return null; // `scanf()` などの入力要求を無効化
    }
};

function runCCode() {
    console.log("Running C program...");
    Module._main(); // C のメイン関数を実行
}
