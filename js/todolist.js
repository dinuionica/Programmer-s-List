// Copyright 2021 Dinu Ion Irinel
function addtask() {
  let task = document.getElementById("task").value;
  if (task.length === 0) {
    alert("Please enter a task !");
    return;
  } else {
    document.getElementById("task").value = "";
  }
  let li = document.createElement("li");
  let text = document.createTextNode(task);
  li.appendChild(text);
  li.classList.add("list");
  let list;
  list = document.getElementById("list");
  li.addEventListener("click", function () {
    li.remove();
  });
  list.appendChild(li);
}
