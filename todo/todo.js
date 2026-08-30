let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

//value gula rakhte array r count
let tasks = [];
let taskCounter = 1;

//render korte function
function render() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.classList.add("task-item");
    //lekha gula span korte
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = `${task.text} ${task.completed === false ? "not" : ""} completed ${task.id}`;
    //butto wrap
    let btnWrapper = document.createElement("div");
    btnWrapper.classList.add("task-button");
    //complete btn
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✅";
    //delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❎";

    //sob button btnwrapper a
    btnWrapper.appendChild(completeBtn);
    btnWrapper.appendChild(deleteBtn);
    // sob kisu li a append
    li.appendChild(span);
    li.appendChild(btnWrapper);

    // tasklist a sob
    taskList.appendChild(li);
  });
}
//task add function
function addTask() {
  let taskText = taskInput.value.trim();
  //console.log(taskText);
  if (taskText == "") {
    return;
  }

  //same value age ase nki check
  let oldTask = tasks.find((task) => task.text === taskText);
  if (oldTask) {
    oldTask.completed = true;
    taskInput.value = "";
    render();
    return;
  }
  let newTask = {
    id: taskCounter++,
    text: taskText,
    completed: false,
  };
  //new task array a push
  tasks.push(newTask);
  //console.log(newTask);
  taskInput.value = "";
  render();
}

//add btn
addBtn.addEventListener("click", addTask);
//enter dileo hobe
taskInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTask();
  }
});
