var stateModal;
var elem;
var modal = document.getElementById("myModal");
var column1 = document.getElementById("column1");
var column2 = document.getElementById("column2");
var column3 = document.getElementById("column3");
var column4 = document.getElementById("column4");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target.id);
}
function drop(ev) {
  if (
    ev.target.id === "tasks1" ||
    ev.target.id === "tasks2" ||
    ev.target.id === "tasks3" ||
    ev.target.id === "tasks4"
  ) {
    console.log(ev.target);
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
}

function newTask(state) {
  modal.style.display = "block";
  let name = document.getElementById("name");
  let estimation = document.getElementById("estimation");
  name.value = "";
  estimation.value = "";
  stateModal = state;
}

function createTask() {
  let task = document.getElementById("task1");
  let newTask = task.cloneNode(true);
  newTask.style.display = "block";
  let name = document.getElementById("name");
  let estimation = document.getElementById("estimation");
  newTask.children[0].innerHTML = name.value;
  newTask.children[1].innerHTML = estimation.value;
  newTask.id = Math.random();

  if (stateModal === "to-do") {
    column1.children[1].append(newTask);
  } else if (stateModal === "in-prog") {
    column2.children[1].append(newTask);
  } else if (stateModal === "to-be-test") {
    column3.children[1].append(newTask);
  } else if (stateModal === "done") {
    column4.children[1].append(newTask);
  }
  closeModal();
}

function closeModal() {
  modal.style.display = "none";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function deleteTask(ev) {
  const element = ev.target.parentNode;

  if (element) {
    element.remove();
  }
}
