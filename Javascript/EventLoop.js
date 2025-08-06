(() => {
    console.log("同步1");
  
    setTimeout(() => {
      console.log("宏任務1");
    }, 0);
  
    Promise.resolve().then(() => {
      console.log("微任務1");
    });
  
    Promise.resolve().then(() => {
      console.log("微任務2");
    });
  
    setTimeout(() => {
      console.log("宏任務2");
    }, 0);
  
    console.log("同步2");
  })();

//事件循環 = 同步任務 ➜ 清空所有微任務 ➜ 執行 1 個宏任務 ➜ 再次循環
