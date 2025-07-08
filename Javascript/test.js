const todos = [
  { id: 1, text: "買牛奶", done: false },
  { id: 2, text: "寫作業", done: true },
  { id: 3, text: "整理房間", done: false },
];

const test = (id) =>
  todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: true };
    } else {
      return todo;
    }
  });
console.log(test(1));
