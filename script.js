var Module = {
    onRuntimeInitialized: function() {
        console.log("WASM Loaded!");
        document.getElementById("runButton").disabled = false; // ボタンを有効化
    }
};

function runCCode() {
    console.log("Running C program...");

    if (typeof Module._main === "function") {
        Module._main(); // C のメイン関数を実行
    } else {
        console.error("Error: Module._main is not available.");
    }
}
