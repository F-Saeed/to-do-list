import { foldersObj } from './folder';
import { uniqueID } from './functions';

const createTaskElements = () => {
  const tasks = document.querySelector('#tasks');
  const task = document.createElement('div');
  const heading = document.createElement('h2');
  const details = document.createElement('p');
  const due = document.createElement('p');
  const priority = document.createElement('p');
  const button = document.createElement('button');

  return {
    tasks,
    task,
    heading,
    details,
    due,
    priority,
    button,
  };
};

const taskAttributes = (
  { task, heading, details, due, priority, button },
  taskFormValues
) => {
  task.className = `task`;
  task.id = taskFormValues.id;
  task.dataset.priority = taskFormValues.priority;

  heading.innerHTML = taskFormValues.title;
  details.innerHTML = taskFormValues.details;
  due.innerHTML = `<strong>Due:</strong>  ${taskFormValues.date}`;
  priority.innerHTML = `<strong>priority:</strong>  ${taskFormValues.priority}`;

  button.setAttribute('type', 'button');
  button.className = 'remove-task';
  button.innerHTML = '<i class="fas fa-times fa-2x"></i>';
};

const taskAppend = ({
  tasks,
  task,
  heading,
  details,
  due,
  priority,
  button,
}) => {
  task.appendChild(heading);
  task.appendChild(details);
  task.appendChild(due);
  task.appendChild(priority);
  task.appendChild(button);
  tasks.appendChild(task);
};

const createTask = (folderID, taskForm) => {
  const taskFormValues = Object.fromEntries(new FormData(taskForm));
  const taskElements = createTaskElements();
  const taskID = uniqueID();

  taskFormValues.id = taskID;

  taskAttributes(taskElements, taskFormValues);
  taskAppend(taskElements);

  foldersObj[folderID].tasks[taskID] = taskFormValues;
  localStorage.setItem(folderID, JSON.stringify(foldersObj[folderID]));
};

const removeTasks = (tasks, selectedFolderID) => {
  if (tasks.dataset.index === selectedFolderID) {
    tasks.innerHTML = '';
  }
};

const recreateTasks = (folderID) => {
  const folder = JSON.parse(localStorage.getItem(folderID));

  Object.values(folder.tasks).forEach((task) => {
    const taskFormValues = task;
    const taskElements = createTaskElements();
    const taskID = taskFormValues.id;

    taskAttributes(taskElements, taskFormValues);
    taskAppend(taskElements);

    foldersObj[folderID].tasks[taskID] = taskFormValues;
  });
};
export { createTask, removeTasks, recreateTasks };
