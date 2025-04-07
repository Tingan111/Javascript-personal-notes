const numbers = [1, 2, 3, 4];
const result=numbers.map((x)=>x*x)
console.log(result);//輸出[1,4,9,16]


const kvArray=[
    {key:1,value:10},
    {key:2,value:20},
    {key:3,value:30},
]




const reformattedArray=kvArray.map(({key,value})=>({[key]:value}))
console.log(reformattedArray);
// | 用法               | 寫法                      | 是什麼？                               |
// |--------------------|---------------------------|----------------------------------------|
// | 陣列解構賦值       | const [a, b] = arr         | 拆出陣列裡的值                         |
// | 物件解構賦值       | const { x, y } = obj       | 拆出物件裡對應 key 的值                |
// | 計算屬性名稱       | { [key]: value }           | 用變數 key 的值當作屬性名稱            |
//解構賦值是 從結構中拿資料出來
//計算屬性名稱是 用變數動態組裝 key

