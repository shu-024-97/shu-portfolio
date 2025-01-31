// WASM モジュールの初期化
var Module = {
    onRuntimeInitialized: function() {
        console.log("WASM Loaded!");
        document.getElementById("runButton").disabled = false; // WASM 読み込み後にボタンを有効化
    }
};

// C プログラムを実行する関数
function runProgram() {
    let userInput = prompt("Enter your command (1-7):");

    // 🚨 キャンセルされたら実行しない 🚨
    if (userInput === null) {
        console.log("Execution canceled by user.");
        return;
    }

    console.log("Running C program...");
    
    // Cのmain関数を実行 (引数が必要なら適宜変更)
    Module.ccall(
        'main',  // C の `main()` を呼び出す
        'number',  // 戻り値の型 (void の場合は null)
        ['string'],  // 引数の型
        [userInput]  // 実際の引数
    );
}

// 🚀 ページが読み込まれたら実行
window.onload = function() {
    document.getElementById("runButton").addEventListener("click", runProgram);
};
