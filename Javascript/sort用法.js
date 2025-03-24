function sumOfSmallestValues(arr) {
const sum=arr.sort()
return sum
}

const list1 = ["abbb","aabba",];
const list2 = [23, 15, 59, 4, 17];
console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19

//sort會把原本的陣列改掉所以不能重疊用 sort().sort() 只會吃到後面sort() 第一個被第二個蓋掉
//sort() 會轉型成字串 以字串第一個字元編碼排序從大到小一樣就換字串第二個繼續比 以此類推
// sort((a,b)=>a-b)  先嘗試轉換成數字 比較 從小排到大 如果出現字串會轉成NaN無法比較導致無法排序會在原位
// sort(a,b)=>a+b)  先嘗試轉換成數字  比較 從大到小  如果出現字串會轉成NaN無法比較導致無法排序會在原位
