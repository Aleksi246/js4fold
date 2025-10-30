// array for todo list
let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ul = document.querySelector('ul');

// add your code here
for (let i of todoList) {
  let li = document.createElement('li');

  let input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'todo-' + i.id;
  input.checked = i.completed;

  input.addEventListener('change', () => {
    i.completed = !i.completed;
    console.log(todoList);
  });

  let label = document.createElement('label');
  label.htmlFor = 'todo-' + i.id;
  label.innerText = i.task;

  let butt = document.createElement('button');
  butt.innerText = 'delete';

  butt.addEventListener('click', () => {
    todoList = todoList.filter((a) => a.id !== i.id);
    console.log(todoList);
    ul.removeChild(li);
  });

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(butt);

  ul.appendChild(li);
}

const dialog = document.querySelector('#todo-dialog');

document.querySelector('.add-btn').addEventListener('click', () => {
  dialog.showModal();
  input.focus();
});

let counter = 6;
document.querySelector('#sub').addEventListener('click', () => {
  event.preventDefault();

  let newdata = {
    id: counter,
    task: document.querySelector('#input').value,
    completed: false,
  };

  todoList.push(newdata);
  dialog.close();

  let li = document.createElement('li');

  let input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'todo-' + counter;

  input.addEventListener('change', () => {
    newdata.completed = !newdata.completed;
    console.log(todoList);
  });

  let label = document.createElement('label');
  label.htmlFor = 'todo-' + newdata.id;
  label.innerText = newdata.task;

  let butt = document.createElement('button');
  butt.innerText = 'delete';

  butt.addEventListener('click', () => {
    todoList = todoList.filter((a) => a.id !== newdata.id);
    console.log(todoList);
    ul.removeChild(li);
  });

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(butt);

  ul.appendChild(li);

  counter++;
  console.log(todoList);
});
