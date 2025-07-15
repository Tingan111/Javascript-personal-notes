function add() {
  const ul = document.querySelector(".ul");
  async function getItem() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.title;
      ul.appendChild(li);
    });
  }
  getItem();
}
add();
