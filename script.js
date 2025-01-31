var Module = {
    onRuntimeInitialized: function() {
        console.log("WASM Loaded!");
        document.getElementById("runButton").disabled = false; // 実行ボタンを有効化
    }
};

function sendInput() {
    var input = document.getElementById("userInput").value;
    if (input) {
        Module.ccall('main', 'number', ['string'], [input]);
    }
}
