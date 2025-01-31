document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded.");
    
    document.getElementById("runButton").addEventListener("click", function() {
        if (typeof Module._main === "function") {
            console.log("Running C program...");
            Module._main(); // C の main() を実行
        } else {
            console.error("Error: Module._main is not available.");
        }
    });
});
