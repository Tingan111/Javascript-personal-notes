// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
return url.split("#")[0]
}
//針對網址.split語法用#分開成陣列取陣列第一個索引值為[0] 
  console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
  console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
  console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 5xcampus.com/courses/?page=1