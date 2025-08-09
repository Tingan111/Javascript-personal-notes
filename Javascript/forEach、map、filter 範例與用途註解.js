const fruit=["蘋果","香蕉","西瓜"]
const fruitForEach=(arr)=>arr.forEach((e)=>console.log(e));
const fruitMap=(arr)=>arr.map(arr=>arr+arr)
const fruitsFilter=(arr)=>arr.filter(item=>item==="蘋果")
fruitForEach(fruit);
console.log(fruitsFilter(fruit));
console.log(fruitMap(fruit));
//forEach 適合做「執行動作」型的事情（副作用），不會產生新的結果陣列。
//如果要轉換資料，應該用 map()。
//如果要篩選資料，應該用 filter()。

