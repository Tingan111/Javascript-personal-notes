// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
const arr=str.split("_")
let result=arr[0];
for(let i=1;i<arr.length;i++){
    result+=arr[i][0].toUpperCase()+arr[i].slice(1);
}return result;
}
//   function toCamelCase(str) {
//     return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
// }

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore
// 使用 split("_") 將字串切割成陣列，每段單字為一個陣列元素
// 由於 camelCase 的第一個單字要保持原樣，所以 arr[0] 直接保留
// 透過 for 迴圈從陣列的第二個元素（索引 1）開始處理
// 每個單字的「第一個字母」轉成大寫（toUpperCase()）
// 再加上「剩下的部分」（slice(1)）保持原樣
// 最後把這些處理過的單字組合起來，變成 camelCase 格式