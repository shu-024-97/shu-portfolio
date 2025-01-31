document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully. No pop-ups should appear.");

    // ボタン要素取得
    const runButton = document.getElementById("runButton");

    // ボタンの初期状態は無効
    runButton.disabled = true;

    // WASM モジュールのロードが完了したら実行
    if (typeof Module !== "undefined") {
        Module.onRuntimeInitialized = function () {
            console.log("WASM Loaded!");
            runButton.disabled = false; // ボタンを有効化
        };
    } else {
        console.error("Module is undefined. WASM might not be loaded properly.");
    }

    // ボタンが押された時の動作
    runButton.addEventListener("click", function () {
        console.log("Running C program...");
        if (typeof Module !== "undefined" && typeof Module._main === "function") {
            try {
                Module._main();
            } catch (error) {
                console.error("Error running C program:", error);
            }
        } else {
            console.error("Module._main is not defined. Check WASM initialization.");
        }
    });
});
