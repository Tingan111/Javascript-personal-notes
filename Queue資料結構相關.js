// 編號：CANDY-022
// 程式語言：JavaScript
// 題目：實作 Queue 資料結構 採先進先出法
//Queue 的重點
//FIFO：先進先出。
//enqueue()：加入新元素到隊列尾巴。
//dequeue()：取出隊列前面的元素。
//length：隨時要知道目前的長度。

class Queue {
  #items=[];//   ＃是EMCAscript2022 私有變數用法

 enqueue(value){
  if(value!==undefined){
    this.#items.push(value)
  }
 }
 dequeue(){
  return this.#items.shift()
 }
 get length(){
  return this.#items.length;
 }
    }
    // 實作寫在這裡
  
  
  const queue = new Queue();
  queue.enqueue(123);
  queue.enqueue(456);
  queue.enqueue();
  console.log(queue.length); // 印出 2
  
  const item = queue.dequeue(); // 取出元素
  console.log(item); // 印出 123
  
  queue.dequeue(); // 繼續取出元素
  console.log(queue.length); // 印出 0