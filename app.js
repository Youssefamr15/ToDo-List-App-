/*
  Tasks : 

  1- use Sweet alert if input is empty
  2- Check if Task Exist
  3= Create Delete All Tasks
  4- Create Finish All Tasks
  5- Add Tasks To the Local Storage
 */

// Setting up Variables

let theInput = document.querySelector('.add-task input');
let theAddButton = document.querySelector('.add-task .plus');
let tasksContainer = document.querySelector('.tasks-content');
let tasksCount = document.querySelector('.tasks-count span');
let tasksCompleted = document.querySelector('.tasks-completed span');

//Focus on input Field

window.onload = function () {
  theInput.focus();
};

// Adding the task

theAddButton.onclick = function () {
  // if input is empty
  if (theInput.value === '') {
    console.log('No Value');
  } else {
    let noTasksMsg = document.querySelector('.no-tasks-message');

    // Check if span with no Tasks  Message
    if (document.body.contains(document.querySelector('.no-tasks-message'))) {
      // Remove no tasks msg
      noTasksMsg.remove();
    }

    // Create Span element
    let mainSpan = document.createElement('span');

    // Create delete BTN
    let deleteElement = document.createElement('span');

    // Create The Span text
    let text = document.createTextNode(theInput.value);

    // Create The Delete Button Text
    let deleteText = document.createTextNode('Delete');

    //Add Text To Span
    mainSpan.appendChild(text);
    // Add class to Span
    // mainSpan.className = 'task-box';
    mainSpan.classList.add('task-box');

    //Add Text To Delete Button
    deleteElement.appendChild(deleteText);

    // Add Class TO Delete Button
    deleteElement.className = 'delete';

    // Add Delete Button To Main Span
    mainSpan.appendChild(deleteElement);

    // Add the Task To the Container
    tasksContainer.appendChild(mainSpan);

    // Empty The Input
    theInput.value = '';

    // // Focus on field
    // theInput.focus();

    // Calculate Tasks
    calculateTasks();
  }
};

document.addEventListener('click', function (e) {
  // Delete Task
  if (e.target.className == 'delete') {
    // Remove Current Task
    e.target.parentNode.remove();
    // Check Number of tasks inside Container
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
    // Calculate Tasks
  }

  // Finish Task
  if (e.target.classList.contains('task-box')) {
    // Toggle Class 'finished'
    e.target.classList.toggle('finished');

    // Calculate Tasks
  }

  calculateTasks();
});

// Function to Create No Tasks Message

function createNoTasks() {
  // create Message span element
  let msgSpan = document.createElement('span');
  // Create Text Message
  let msgText = document.createTextNode('No Tasks To Show');
  // Add Text to msgSpanElement
  msgSpan.appendChild(msgText);
  // Add Class To Message Span
  msgSpan.className = 'no-tasks-message';
  // Append the msgSpan Element to task container
  tasksContainer.appendChild(msgSpan);
}

// Function to Calculate Tasks
function calculateTasks() {
  // Calculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll(
    '.tasks-content .task-box'
  ).length;
  // Calculate Completed Tasks
  tasksCompleted.innerHTML = document.querySelectorAll(
    '.tasks-content .finished'
  ).length;
}
