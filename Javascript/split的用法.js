// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
return url.split("#")//split能把字串轉換成陣列 
}
//針對網址.split語法用#分開成陣列取陣列第一個索引值為[0] 
  console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
  console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
  console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 5xcampus.com/courses/?page=1

const numberArr=(num)=>{return num.toString().split()}//split只對字串有效，對數字要先轉字串

console.log(numberArr(123214));
console.log(numberArr(1232,14));//如果沒split沒帶因數會以分隔號,分開




