const inputBox = document.getElementById("input-box");
const todoListContainer = document.getElementById("todo-list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    todoListContainer.appendChild(li); //to be displayed
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //cross icon code
    li.appendChild(span); //to be displayed
  }
  inputBox.value = "";
  saveData();
}
todoListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
//inorder to make it unchanged on reload
function saveData() {
  localStorage.setItem("data", todoListContainer.innerHTML);
}
function showTask() {
  todoListContainer.innerHTML = localStorage.getItem("data");
}
showTask();
