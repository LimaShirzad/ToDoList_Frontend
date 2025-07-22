
    function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();
      if (taskText === "") return;

      const taskDiv = document.createElement("div");
      taskDiv.className = "task-item";

      const taskSpan = document.createElement("span");
      taskSpan.innerText = taskText;

      const btnsDiv = document.createElement("div");

      const doneBtn = document.createElement("button");
      doneBtn.className = "btn-icon";
      doneBtn.innerHTML = '<i class="fa fa-check text-success"></i>';
      doneBtn.onclick = () => taskSpan.classList.toggle("task-done");

      const delBtn = document.createElement("button");
      delBtn.className = "btn-icon";
      delBtn.innerHTML = '<i class="fa fa-trash text-danger"></i>';
      delBtn.onclick = () => taskDiv.remove();

      btnsDiv.appendChild(doneBtn);
      btnsDiv.appendChild(delBtn);

      taskDiv.appendChild(taskSpan);
      taskDiv.appendChild(btnsDiv);

      document.getElementById("taskList").appendChild(taskDiv);
      input.value = "";
    }