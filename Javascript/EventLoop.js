(()=> console.log("標題"))()
console.log("1.開始");
setTimeout(()=>{
    console.log("2.執行setTimeout")},0);
Promise.resolve().then(()=>{
    console.log("3.Promise");
});
console.log("4.結束");

// 同步任務：會直接執行，排在最前面。

// 微任務（Microtask）：像是 Promise.then()、MutationObserver，
// - 會在目前所有同步任務結束後執行，
// - 而且會「一次清空所有微任務」後，才輪到宏任務。

// 宏任務（Macrotask）：像是 setTimeout、setInterval、DOM 事件的回調函數等，
// - 每次事件循環會處理一個宏任務，然後再清光微任務。
