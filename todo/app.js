console.log("connected");

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
// console.log(taskInput, addBtn, taskInput)

// let addBtn2 = document.querySelector("button")
//console.log(addBtn2)

// let addBtn2 = document.querySelector("#addBtn")
//console.log(addBtn2)

// addBtn.addEventListener("click", function () {
//   console.log("btn clicked");
// });
addBtn.addEventListener("click", () => {
  console.log(taskInput.value);
});

taskInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    console.log("Enter pressed", taskInput.value);
  }
});
