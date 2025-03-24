function isSquare(num) { 
const sqrt=Math.sqrt(num);  //Math.sqrt 回傳平方根的值 回傳不了會給ＮaN

return Number.isInteger(sqrt)  //Number.isInteger 判斷是否為整數 回傳布林值 true or false
}
  
  console.log(isSquare(0));    // true
  console.log(isSquare(4));    // true
  console.log(isSquare(5));    // false
  console.log(isSquare(100));  // true
  console.log(isSquare(-4));   // false
  console.log(isSquare(-1));   // false