// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次
// function findOddElm(arr) {
//  return arr.reduce((arr,num) => arr ^ num,0)
// }


// function findOddElm(arr){
//     const countMap=new Map();   //構建Map
//     //計算每個數字出現的次數
//     for(const num of arr){
//         countMap.set(num,(countMap.get(num)||0)+1);
//     }
//     //找出出現次數為奇數的數字
//     for(const [num,count]of countMap){
//         if(count%2===1) return num;
//     }
// }

function findOddElm(arr){
    arr.sort((a,b)=>a + b);//先用sort排序陣列
    for(let i=0;i<arr.length;i++){ 
        let count=1;
      // 計算當前數字的出現次數
        while (arr[i]===arr[i+1]){
            count++;
            i++;
        }
      //  console.log(count);
        
        if(count%2===1)return arr[i]; //
    }    

}  
  console.log(findOddElm([1, 1, 2])); // 印出 2
  console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
  console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
  console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
  console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5