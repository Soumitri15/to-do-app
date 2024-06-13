// document.addEventListener('DOMContentLoaded', () => {
//     const todoForm = document.getElementById('todoForm');
//     const todoInput = document.getElementById('todoInput');
//     const todoList = document.getElementById('todoList');

//     // Load tasks from localStorage
//     const loadTasks = () => {
//         const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         tasks.forEach(task => {
//             addTaskToDOM(task);
//         });
//     };

//     // Save tasks to localStorage
//     const saveTasks = () => {
//         const tasks = [];
//         document.querySelectorAll('#todoList li').forEach(li => {
//             tasks.push(li.firstChild.textContent);
//         });
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     };

//     // Add task to DOM
//     const addTaskToDOM = (task) => {
//         const li = document.createElement('li');
//         li.textContent = task;
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.classList.add('delete');
//         deleteButton.addEventListener('click', () => {
//             li.remove();
//             saveTasks();
//         });
//         li.appendChild(deleteButton);
//         todoList.appendChild(li);
//     };

//     // Add task event listener
//     todoForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const newTask = todoInput.value.trim();
//         if (newTask) {
//             addTaskToDOM(newTask);
//             todoInput.value = '';
//             saveTasks();
//         }
//     });

//     // Load existing tasks
//     loadTasks();
// });