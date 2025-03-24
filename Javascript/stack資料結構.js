// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

//  class Stack {
//     constructor(){      //是將屬性設為公開，外部可以直接訪問或修改。
//         this.items=[];
//     }
//     push(element){
//         if(element!==undefined){
//         this.items.push(element);
//     }}
//     pop(){
//        return this.items.pop();
//     }
//     get size(){
//         return this.items.length;
//     }
//  }
     
class Stack{
    #items=[];
    push(value){
        if(value!==undefined){
        this.#items.push(value)}
    }
    pop(){
        return this.#items.pop();
    }
    get size(){
        return this.#items.length;
    }
}
  
  const stack = new Stack();
  
  stack.push(123);
  stack.push(456);
  stack.push();
  console.log(stack.size); // 印出 2
  
  const item = stack.pop(); // 取出元素
  console.log(item); // 印出 456
  
  stack.pop(); // 繼續取出元素
  console.log(stack.size); // 印出 0 
  