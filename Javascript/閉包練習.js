function createCounter1(){
    let count=0;
    return function(){
        count++
        return count
    }
}
const abc = createCounter1()

console.log(abc())  //1
console.log(abc())  //2
console.log(abc())  //3

// 閉包的形成：
// 函式裡面放變數之後內部再回傳一個函式裡面在對外部函式變數作用
// 回傳變數之後在外定義一個變數封裝呼叫函式 使其函數裡的變數
// 變成私有變數 讓外部能夠呼叫

function createArrayManager() {
  let arr = [];
  return {
    addItem: function (a) {
      arr.push(a);
      console.log(`add:${a}`);
    },
    removeItem: function () {
      const reomved = arr.pop();
      console.log(`Remove:${reomved}`);
    },
    showItems: function () {
      console.log(arr);
    },
  };
}
const aa = createArrayManager();
aa.addItem("tttt");
aa.addItem("ssssss");
aa.removeItem();
aa.showItems();

// 閉包就像是一個有鎖的盒子，裡面有三顆球（外層變數），
// 只有特定的三把鑰匙（addItem、removeItem、showItems）可以打開這個盒子，
// 這樣外面的人無法直接接觸到球，只有這三個方法能操作它。

function items() {
  let count = 1;
  return function (name, color) {
    return { id: count++, itemName: name, itemColor: color };
  };
}
const getItem = items();

const itemOne = getItem("phone", "red");
const itemTwo = getItem("cellphone", "blue");

const itemBox = [itemOne, itemTwo];
console.log(itemBox);

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}
const counter1 = createCounter();
console.log(counter1.getCount()); // 0
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.getCount()); // 2

// 這是另一個 createCounter() 所產生的新閉包
// 所以 count 又重新初始化為 0
const counter2 = createCounter();
console.log(counter2.getCount()); //
