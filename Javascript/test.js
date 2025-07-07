const todos = [
    { id: 1, text: '買牛奶', done: false },
    { id: 2, text: '寫作業', done: true },
    { id: 3, text: '整理房間', done: false },
  ];

const deleteTodo=(text)=>todos.filter(todo=>todo.text!==text)

console.log(deleteTodo('買牛奶'));
console.log(todos[2].text);
