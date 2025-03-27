let fruits=[];
fruits.push("apple","boo","oragin")
console.log(`第一個${fruits.length}`);

fruits[5]="mango";//直接塞到第五個 3,4 被塞了兩個undefined
console.log(fruits[3]);//undefined
fruits.push("從後面加")
console.log(fruits);
fruits.pop()//從後面刪
console.log(fruits);
console.log(Object.keys(fruits)); //數組屬於object object就有keys索引值;
console.log(typeof(fruits)
);
fruits.unshift("從前面加");
console.log(fruits);

fruits.shift();//刪掉第一個
console.log(fruits);

console.log(`第二個${fruits[5]}`);
console.log(fruits.length);
//宣告用let才能改變陣列  因為filter會回傳個新陣列 
// fruits=fruits.filter(fruit=>fruit!=="undefined"); 某種狀況可能會出錯
fruits=fruits.filter(Boolean); // 這會自動過濾 undefined、null、false、0、NaN、"" 

console.log(fruits);
