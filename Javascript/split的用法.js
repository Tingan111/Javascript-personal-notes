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
console.log(numberArr(1232,14,12));//如果沒split沒帶引數會以分隔號,拆開並只留下第一個元素

const limitArr=(str)=>{return str.split("",3)}//第一個引數帶""會把字串拆開，第二個引數決定最多留幾個元素
console.log(limitArr("dd1sadasdasd"));


