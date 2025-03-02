// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
let arr=[]
let lastSeen=null;
for(let char of sequence){
  if(char!==lastSeen){
    arr.push(char);
    lastSeen=char
  }
}  return arr;

}
//   function uniqueOrder(sequence) {
//     return sequence.reduce((arr, char) => {
//         if (arr[arr.length - 1] !== char) {
//             arr.push(char);
//         }
//         return arr;
//     }, []);
// }
  
  console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
  console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
  console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
  console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]

//  先定義空陣列
//  及一個null
//   用for of 遍歷
// 在用if判斷 值跟前一個有沒有一樣 然後改變null值