// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

// const numberReducer = (num) => {
//     let result=0;
//     let Reducer=num.toString().split("").map(Number)
// for(let i=0;i<Reducer.length;i++){
//     result+=Reducer[i]
// }let realResult=0;
//  let realRedcer=result.toString().split("").map(Number)
//  for(let i=0;i<realRedcer.length;i++){
//     realResult+=realRedcer[i]
//  }return realResult
// }

const numberReducer=(num)=>{
    
    if(num<10)return num;
    
    const sum=num.toString().split("").map(Number).reduce((acc,cur)=>acc+cur,0)
    return numberReducer(sum);    
}


//其實這個問題可以用 數字根（Digital Root） 公式計算：
//Digital Root(n)=1+(n−1)mod9
//const numberReducer = (num) => (num - 1) % 9 + 1;

  console.log(numberReducer(9527)); // 印出 5
  console.log(numberReducer(1450)); // 印出 1
  console.log(numberReducer(5566108)); // 印出 4
  console.log(numberReducer(1234567890)); // 印出 9
//把數字拆開  怎麼拆開 先轉成字串 
  //在做加總  用迴圈加總
  //在拆開一次 用迴圈加總
  //印出來 

//   array.reduce((accumulator, currentValue) => { ... }, initialValue)
// accumulator（通常縮寫為 acc）：累計值，每次迴圈時，它會累積計算結果。
// currentValue（通常縮寫為 cur）：當前陣列元素，每次迴圈時，代表目前正在處理的數字。
// initialValue（可選）：初始值，如果提供，accumulator 會從這個值開始。