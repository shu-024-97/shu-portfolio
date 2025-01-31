var Module = {
    onRuntimeInitialized: function() {
        console.log("WASM Loaded!");
        document.getElementById("runButton").disabled = false; // ボタンを有効化
    }
};

function runCCode() {
    console.log("Running C program...");
    Module._main(); // C のメイン関数を実行
}
