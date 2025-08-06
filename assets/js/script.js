const list = document.getElementById("list");

const form = document.querySelector("form");

const taskInput = document.getElementById("task");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   Creazione Elementi ----
  const task = document.createElement("div");
  task.classList.add("task-item");
  const h2 = document.createElement("h2");
  //   Creazione Edit -------
  const completeTask = document.createElement("div");
  const tickIcon = document.createElement("img");
  tickIcon.src = "./assets/img/tick.svg";
  tickIcon.alt = "tick";
  completeTask.id = "icon";
  completeTask.appendChild(tickIcon);
  //   Creazione Delete -------
  const deleteTask = document.createElement("div");
  const trashBin = document.createElement("img");
  deleteTask.id = "icon";
  trashBin.src = "./assets/img/trash-bin.svg";
  trashBin.alt = "bin";
  deleteTask.appendChild(trashBin);
  // Inserimento value
  h2.innerText = taskInput.value;

  // Assenazione a Task elementi creati -----
  task.appendChild(h2);
  task.appendChild(completeTask);
  task.appendChild(deleteTask);

  list.appendChild(task);
  // Reset campo value -----
  taskInput.value = " ";
  // Task completata ------
  completeTask.onclick = function (e) {
    h2.classList.add("h2Check");
  };

  //   Eliminare Task ------
  trashBin.onclick = function (e) {
    task.remove();
  };
});
