const users=["小明","小花","小草","小小","小華","小黑","小白"]
const winner=users[Math.floor(Math.random()*users.length)]
console.log("中獎者",winner);
// Math.random() 會產生 0～1 之間的小數，乘上陣列長度後
// 仍是小數，需用 Math.floor() 無條件捨去成整數索引
// 才能正確取出陣列內的元素

//隨機排列
const shuffle = (arr) => {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
console.log(shuffle(users));

