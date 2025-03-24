console.log("1.開始");
setTimeout(()=>{
    console.log("2.執行setTimeout")},0);
Promise.resolve().then(()=>{
    console.log("3.Promise");
});
console.log("4.結束");

//觀察顯示順序 會出現 1 4 3 2 為什麼？