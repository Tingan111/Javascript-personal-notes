// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數
// function randomNumber(number1,number2){
//     if(number2===undefined){
//         return Math.floor(Math.random() * number1);
//     }
//     else{
//         return Math.floor(Math.random()*number2-number1-number1);
//     }
// }
function randomNumber(min,max=0){      //當沒有參數 可以先給他值來代替underfined 這樣就不用判斷max是否是underfined
    return Math.floor(Math.random()*(max-min) + min);
}
console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
