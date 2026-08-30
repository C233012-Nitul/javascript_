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
  let li = document.createElement("li");
  // li.textContent = taskInput.value;
  // taskList.appendChild(li);
  let span = document.createElement("span");
  span.textContent = taskInput.value;

  let btnWrapper = document.createElement("span");

  let complete = document.createElement("button");
  complete.textContent = "✅";

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❎";

  //btn gula eksathe korte
  btnWrapper.appendChild(complete);
  btnWrapper.appendChild(deleteBtn);

  //append korle acces korte parbe
  //li.appendChild(span);
  //li.appendChild(btnWrapper);
  li.append(span, btnWrapper);

  //main taskinput a sob append
  taskList.appendChild(li);
  taskInput.value = "";
});

//any btn
// taskInput.addEventListener("keydown", (event) => {
//   if (event.key == "Enter") {
//     console.log("Enter pressed", taskInput.value);
//   }
// });

//create element
// let li = document.createElement("li");
// li.textContent = "Learn Js";
// console.log(li);
// taskList.appendChild(li)

taskInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    // let li = document.createElement("li");
    // li.textContent = taskInput.value;
    // taskList.appendChild(li);
    let li = document.createElement("li");
    // li.textContent = taskInput.value;
    // taskList.appendChild(li);
    taskInput.value = "";
    let span = document.createElement("span");
    span.textContent = taskInput.value;
    let btnWrapper = document.createElement("div");
    let complete = document.createElement("button");
    complete.textContent = "✅";
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❎";

    li.appendChild(span);
    li.appendChild(btnWrapper);
    //li.appendChild(span, btnWrapper)

    taskInput.appendChild(li);
  }
});
