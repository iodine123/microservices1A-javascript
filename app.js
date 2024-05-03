document.addEventListener('DOMContentLoaded', () => {
  // Fetch data from the server
  fetch('/getdata')
    .then(response => response.json())
    .then(data => {
      const todoList = document.getElementById('todo-list');
      data.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.description;
        todoList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
