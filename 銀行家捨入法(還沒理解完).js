// 編號：CANDY-025
// 程式語言：JavaScript
// 題目：
//   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
//   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
//   計算方式是「四捨六入五成雙」
//   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

function bankersRounding(num, digits = 0) {
  const factor = Math.pow(10, digits); // 計算 10 的倍數來進行小數捨入
  const scaledNum = num * factor; // 把數字放大到整數層級處理

  const rounded = Math.floor(scaledNum); // 先向下取整
  const remainder = scaledNum - rounded; // 取得小數部分

  if (remainder < 0.5) {
      return rounded / factor; // 小於 0.5 直接捨去
  } else if (remainder > 0.5) {
      return (rounded + 1) / factor; // 大於 0.5 則進位
  } else {
      // 剛好是 0.5，則判斷成雙規則
      if (rounded % 2 === 0) {
          return rounded / factor; // 如果是偶數，則不變
      } else {
          return (rounded + 1) / factor; // 如果是奇數，則進位到下一個偶數
      }
  }
}
  
  console.log(bankersRounding(0.4)); // 0
  console.log(bankersRounding(0.6)); // 1
  console.log(bankersRounding(0.5)); // 0
  console.log(bankersRounding(1.5)); // 2
  console.log(bankersRounding(1.24, 1)); // 1.2
  console.log(bankersRounding(1.26, 1)); // 1.3
  console.log(bankersRounding(1.25, 1)); // 1.2

  