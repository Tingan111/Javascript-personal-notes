// 根據上下左右的移動量，計算出最小實際移動方向與距離。
//  
//若結果回到原地，回傳 "回到原地"
//否則依據 X、Y 軸的差值，輸出：
// X 軸：往左 / 往右
// Y 軸：往上 / 往下
// 
//  範例：
//   direction(1, 2, 0, 3) ➜ "往右走3步，往下走1步"
//   direction(2, 2, 1, 1) ➜ "回到原地 " 
 
//有9個結果要判斷，四象限、上下左右線上集及原點(0,0)


const direction=(up,down,left,right)=>{  

let x = right - left; //參數不帶0 用 - 會自動轉型
let y = up - down;
if (x===0&&y===0){
    return "回到原地"};

let xDirection=x > 0 ?`往右走${x}步`:x < 0 ?`往左走${Math.abs(x)}步`:"";//Math.abs()用來取絕對值
let yDirection=y > 0 ?`往上走${y}步`:y < 0 ?`往下走${Math.abs(y)}步`:"";
return [xDirection,yDirection].filter(Boolean).join(",") //filter判斷陣列兩個值是truthy
}																													
console.log(direction(2,1,5))
//filter(Boolean)	保留所有為 true 的項目
//filter(x => Boolean(x))	同上，完整寫法
//filter(x => x)三種寫法效果都一樣 

