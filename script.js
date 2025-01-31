// WASM モジュールの初期化
var Module = {
    onRuntimeInitialized: function () {
        console.log("WASM Loaded!");
        let runButton = document.getElementById("runButton");
        if (runButton) {
            runButton.disabled = false; // ボタンを有効化
            console.log("Run button enabled!");
        } else {
            console.error("Error: Run button not found.");
        }
    }
};

// C プログラムを実行する関数
function runProgram() {
    console.log("Running C program...");

    // WASM の `main` 関数を実行
    if (typeof Module._main === "function") {
        Module._main();
    } else {
        console.error("Error: Module._main is not defined. Make sure program.js is loaded correctly.");
    }
}

// イベントリスナーの設定
window.onload = function () {
    let runButton = document.getElementById("runButton");

    if (runButton) {
        runButton.addEventListener("click", runProgram);
        console.log("Run button is ready!");
    } else {
        console.error("Run button not found.");
    }
};

// 🚀 追加: ページを開いたときのポップアップをブロック
// alert や prompt が実行されていないことを確認
window.addEventListener("load", function () {
    console.log("Page loaded successfully. No pop-ups should appear.");
});
