 // 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
    const words=input.split(" ");
    let highestWord="";
    let highestScore=0;

    for(const word of words){
        let score=0;
    for(const char of word){
        score+=char.charCodeAt(0)-96;
    }
    if(score > highestScore){
        highestScore=score;
        highestWord=word;
    }
    }
return highestWord

    // 實作寫在這裡
  }
  
  console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
  console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
  console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there  

// 📌 解題思路
// 拆分字串：

// 使用 .split(" ") 以空格分割字串，得到單字陣列。
// 計算單字分數：

// 逐一處理每個單字，把每個字母轉換為對應的分數，並加總該單字的分數。
// 比較最高分：

// 記錄當前最高分與對應的單字。
// 若找到更高分的單字，更新結果。
// 回傳最高分單字。

