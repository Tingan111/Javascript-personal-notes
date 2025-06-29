const users=["小明","小花","小草","小小","小華","小黑","小白"]
const winner=users[Math.floor(Math.random()*users.length)]
console.log("中獎者",winner);
// Math.random() 會產生 0～1 之間的小數，乘上陣列長度後
// 仍是小數，需用 Math.floor() 無條件捨去成整數索引
// 才能正確取出陣列內的元素