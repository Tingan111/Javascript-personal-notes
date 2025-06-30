const shuffle=(array)=>{

    const arr = [...array]; // 不要改到原陣列
    for (let i = arr.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

const numbers=[1,2,3,4,5,6,7,8,9,10]
const strings=["小一","小二","小三","小四"]
console.log(shuffle(numbers));
console.log(shuffle(strings));

// Fisher-Yates Shuffle 洗牌演算法

//用於打亂陣列順序，確保每種排列出現機率相等（公平性高）。
