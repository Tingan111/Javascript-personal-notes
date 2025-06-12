//我只是創立了微任務接宏任務
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//如果執行send，希望他先排進微任務等待
async function send() {
   await delay(5000);
    console.log("寄出！");
  }
//執行會希望console.log("歡迎！");等待send()先執行完
   async function flow() {
    console.log("準備中...");
   await  send();
    console.log("歡迎！");
  }
  
  flow();