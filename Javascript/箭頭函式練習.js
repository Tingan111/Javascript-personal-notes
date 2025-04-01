// const materials = ["Html", "CSS", "Javascript", "React"];
// console.log(materials.map((materials)=>materials.length));
// // [4,3,10,5]
//用map抓陣列每個字串轉換成字串長度

const { log } = require("console");

// const numbers = [1, 2, 3, 4, 5];
// const doubled=numbers.map(x=>x*2)
// console.log(doubled); // 預期輸出：[2, 4, 6, 8, 10]

const students = [
    { name: '小明', score: 75 },
    { name: '小美', score: 58 },
    { name: '小王', score: 92 },
    { name: '阿花', score: 43 }
  ];
  
const result=students.map(student=>{
    return`${student.name}:${student.score>=60?"及格":"不及格"}`;
});
;
console.log("[\n" + result.map(item =>`  "${item}"`).join(",\n") + "\n]");

  // 請用箭頭函式寫出 result 陣列，格式如下：
  /*
  [
    '小明:及格',
    '小美:不及格',
    '小王:及格',
    '阿花:不及格'
  ]
  */