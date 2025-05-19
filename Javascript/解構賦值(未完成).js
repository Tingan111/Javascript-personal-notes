//假設某個陣列
let cats=["黑貓","橘貓","白貓","短腿貓"]
//裏面只能放變數  依位置對應陣列位置的索引值 不能放string代表位置 也不能放numbe代表位置
let [a,b,c,d]=cats
console.log(a);//黑貓
console.log(b);//橘貓
console.log(c);//白貓
console.log(d);//短腿貓
//交換順序練習
[b,a]=[a,b]
console.log(a);//黑豹
console.log(b);//橘貓
//...變數取剩下所有值為陣列 只能放最後 
let [one,two,...others]=cats
console.log(one);//黑貓
console.log(two);//橘貓
console.log(others);//[ '白貓', '短腿貓' ]

//只有...取全部值為陣列
let[...all]=cats

console.log(all);//[ '黑貓', '橘貓', '白貓', '短腿貓' ]
console.log(all[2]);//白貓

//假設某個物件
let people={
    name:"路人甲",
    age:18,
    work:"沒有"}
//裡面放物件名稱 順序可以亂排 如同關鍵字引數 
let{work,name,age}=people;
console.log(name);
console.log(age);
console.log(work);




