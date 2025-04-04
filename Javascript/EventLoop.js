(()=> console.log("標題"))()
console.log("1.開始");
setTimeout(()=>{
    console.log("2.執行setTimeout")},0);
Promise.resolve().then(()=>{
    console.log("3.Promise");
});
console.log("4.結束");

//觀察顯示順序 會出現 1 4 3 2 為什麼？
//同步 > 微任務 > 宏任務
//同步任務：會直接執行，排在最前面。console.log() fuction啟動

//微任務（Microtask）：像是 Promise.then()、MutationObserver，會在當前執行堆疊結束後立刻執行，優先於宏任務。

//宏任務（Macrotask）：像是 setTimeout、setInterval、DOM event 等。

