// 題目：請寫一個函數 countOccurrences(arr, target)，接受兩個參數：
// 一個整數陣列 arr。
// 一個目標數字 target。
// 返回 target 在陣列中出現的次數。

// 要求：
// 函數需要遍歷陣列，統計 target 出現的次數。
//  返回 target 出現的次數。
// function countOccurrences(arr, target){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             count+=1
//         }
//     }
//     return count
// }
function countOccurrences(arr, target){
return arr.filter(item=>item===target).length}






console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2)); // 返回 3，因為 2 出現了 3 次
console.log(countOccurrences([5, 6, 7, 8, 9], 3));    // 返回 0，因為 3 沒有出現
console.log(countOccurrences([1, 1, 1, 1, 1], 1));    // 返回 5，因為 1 出現了 5 次
