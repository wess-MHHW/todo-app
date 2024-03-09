// CLASSES
class Tasks {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  isNotEmpty() {
    return Boolean(this.tasks.length);
  }

  getUncompletedTasksNumber() {
    return this.tasks.reduce((acc, task) => {
      if (!task.isCompleted) {
        return ++acc;
      }
      return acc;
    }, 0);
  }

  removeCompletedTasks() {
    this.tasks = this.tasks.filter((task) => !task.isCompleted);
  }

  removeTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  addTask(task) {
    this.tasks.unshift(task);
  }

  reorderTasks(id1, id2) {
    let index1 = this.tasks.findIndex((element) => element.id === id1);
    let element1 = this.tasks[index1];
    if (id2) {
      let index2 = this.tasks.findIndex((element) => element.id === id2) - 1;
      this.tasks.splice(index1, 1);
      this.tasks = [
        ...this.tasks.slice(0, index2),
        element1,
        ...this.tasks.slice(index2),
      ];
    } else {
      this.tasks.splice(index1, 1);
      this.tasks.push(element1);
    }
  }
}

class Task {
  constructor(value, isCompleted = false) {
    this.id = crypto.randomUUID();
    this.value = value;
    this.isCompleted = isCompleted;
  }

  setCompleted(value) {
    this.isCompleted = value;
  }
}

// FUNCTIONS

const setThemeColors = (theme) => {
  if (theme === "light") {
    /*
      --clr-main-background: hsl(0, 0%, 98%);
      --clr-title: hsl(0, 0%, 100%);
      --clr-circle: hsl(236, 33%, 92%);
      --clr-task-background: hsl(0, 0%, 100%);
      --clr-cursor: hsl(220, 98%, 61%);
      --clr-placeholder: hsl(236, 9%, 61%);
      --clr-input: hsl(235, 19%, 35%);
      --clr-buttons: hsl(236, 9%, 61%);
      --clr-hover-buttons: hsl(235, 19%, 35%);
      --clr-drag-drop: hsl(236, 9%, 61%);
      --clr-border: hsl(236, 33%, 92%);
      --clr-completed-task: hsl(233, 11%, 84%);
      --clr-close-hover: hsl(0, 0%, 0%);
    */
    document.documentElement.style.setProperty(
      "--clr-main-background",
      "hsl(0, 0%, 98%)"
    );
    document.documentElement.style.setProperty(
      "--clr-title",
      "hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty(
      "--clr-circle",
      "hsl(236, 33%, 92%)"
    );
    document.documentElement.style.setProperty(
      "--clr-task-background",
      "hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty(
      "--clr-cursor",
      "hsl(220, 98%, 61%)"
    );
    document.documentElement.style.setProperty(
      "--clr-placeholder",
      "hsl(236, 9%, 61%)"
    );
    document.documentElement.style.setProperty(
      "--clr-input",
      "hsl(235, 19%, 35%)"
    );
    document.documentElement.style.setProperty(
      "--clr-buttons",
      "hsl(236, 9%, 61%)"
    );
    document.documentElement.style.setProperty(
      "--clr-hover-buttons",
      "hsl(235, 19%, 35%)"
    );
    document.documentElement.style.setProperty(
      "--clr-drag-drop",
      "hsl(236, 9%, 61%)"
    );
    document.documentElement.style.setProperty(
      "--clr-border",
      "hsl(236, 33%, 92%)"
    );
    document.documentElement.style.setProperty(
      "--clr-completed-task",
      "hsl(233, 11%, 84%)"
    );
    document.documentElement.style.setProperty(
      "--clr-close-hover",
      "hsl(0, 0%, 0%)"
    );
  } else {
    /*
      --clr-main-background: hsl(235, 21%, 11%);
      --clr-title: hsl(0, 0%, 100%);
      --clr-circle: hsl(233, 14%, 35%);
      --clr-task-background: hsl(235, 24%, 19%);
      --clr-cursor: hsl(220, 98%, 61%);
      --clr-placeholder: hsl(234, 11%, 52%);
      --clr-input: hsl(234, 39%, 85%);
      --clr-buttons: hsl(234, 11%, 52%);
      --clr-hover-buttons: hsl(236, 33%, 92%);
      --clr-drag-drop: hsl(234, 11%, 52%);
      --clr-border: hsl(233, 14%, 35%);
      --clr-completed-task: hsl(237, 14%, 26%);
      --clr-close-hover: hsl(236, 33%, 92%);
    */
    document.documentElement.style.setProperty(
      "--clr-main-background",
      "hsl(235, 21%, 11%)"
    );
    document.documentElement.style.setProperty(
      "--clr-title",
      "hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty(
      "--clr-circle",
      "hsl(233, 14%, 35%)"
    );
    document.documentElement.style.setProperty(
      "--clr-task-background",
      "hsl(235, 24%, 19%)"
    );
    document.documentElement.style.setProperty(
      "--clr-cursor",
      "hsl(220, 98%, 61%)"
    );
    document.documentElement.style.setProperty(
      "--clr-placeholder",
      "hsl(234, 11%, 52%)"
    );
    document.documentElement.style.setProperty(
      "--clr-input",
      "hsl(234, 39%, 85%)"
    );
    document.documentElement.style.setProperty(
      "--clr-buttons",
      "hsl(234, 11%, 52%)"
    );
    document.documentElement.style.setProperty(
      "--clr-hover-buttons",
      "hsl(236, 33%, 92%)"
    );
    document.documentElement.style.setProperty(
      "--clr-drag-drop",
      "hsl(234, 11%, 52%)"
    );
    document.documentElement.style.setProperty(
      "--clr-border",
      "hsl(233, 14%, 35%)"
    );
    document.documentElement.style.setProperty(
      "--clr-completed-task",
      "hsl(237, 14%, 26%)"
    );
    document.documentElement.style.setProperty(
      "--clr-close-hover",
      "hsl(236, 33%, 92%)"
    );
  }
};

const applyTheme = (theme) => {
  const background = document.querySelector(".bg");
  const themeImage = document.querySelector(".theme-img");
  if (theme === "light") {
    background.classList.remove("dark");
    background.classList.add("light");
    themeImage.classList.remove("dark");
    themeImage.classList.add("light");
  } else {
    background.classList.add("dark");
    background.classList.remove("light");
    themeImage.classList.add("dark");
    themeImage.classList.remove("light");
  }
};

const buildTask = (task) => {
  let div = document.getElementsByTagName("template")[0].content.cloneNode(true)
    .children[0];
  if (task.isCompleted) {
    div.classList.add("completed");
  }
  div.id = task.id;
  div.querySelector("p").textContent = task.value;
  attachTaskEventListeners(div);
  return div;
};

const attachTaskEventListeners = (taskElement) => {
  dragStartEventListener(taskElement);
  dragEndEventListener(taskElement);
  deleteEventListener(taskElement);
  completedEventListener(taskElement);
};

const dragStartEventListener = (element) => {
  element.addEventListener("dragstart", (event) => {
    element.classList.add("dragging");
    event.dataTransfer.setData("text/plain", element.id);
    event.dataTransfer.effectAllowed = "move";
  });
};

const dragEndEventListener = (element) => {
  element.addEventListener("dragend", () => {
    const draggingElement = document.querySelector(".dragging");
    draggingElement.classList.remove("dragging");
  });
};

const deleteEventListener = (element) => {
  const button = element.querySelector(".delete");
  button.addEventListener("click", () => {
    todo.removeTask(element.id);
    localStorage.setItem("tasks", JSON.stringify(todo));
    element.remove();
    if (todo.isNotEmpty()) {
      tasks.querySelector(
        ".tasks-lfet-number"
      ).textContent = `${todo.getUncompletedTasksNumber()} ${
        todo.getUncompletedTasksNumber() === 1 ? "item" : "items"
      } left`;
    } else {
      document.querySelector("main").classList.add("hide");
    }
  });
};

const completedEventListener = (element) => {
  const button = element.querySelector(".input");
  button.addEventListener("click", () => {
    if (element.classList.contains("completed")) {
      element.classList.remove("completed");
      todo.tasks.find((item) => item.id === element.id).setCompleted(false);
    } else {
      element.classList.add("completed");
      todo.tasks.find((item) => item.id === element.id).setCompleted(true);
    }
    localStorage.setItem("tasks", JSON.stringify(todo));
    tasks.querySelector(
      ".tasks-lfet-number"
    ).textContent = `${todo.getUncompletedTasksNumber()} ${
      todo.getUncompletedTasksNumber() === 1 ? "item" : "items"
    } left`;
  });
  const p = element.querySelector("p");
  p.addEventListener("click", () => {
    if (element.classList.contains("completed")) {
      element.classList.remove("completed");
      todo.tasks.find((item) => item.id === element.id).setCompleted(false);
    } else {
      element.classList.add("completed");
      todo.tasks.find((item) => item.id === element.id).setCompleted(true);
    }
    localStorage.setItem("tasks", JSON.stringify(todo));
    tasks.querySelector(
      ".tasks-lfet-number"
    ).textContent = `${todo.getUncompletedTasksNumber()} ${
      todo.getUncompletedTasksNumber() === 1 ? "item" : "items"
    } left`;
  });
};

const createTask = (item) => {
  return new Task(item["value"], item["isCompleted"]);
};

const fetchDATA = async () => {
  try {
    // Try retrieving data from localStorage
    const storedData = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))["tasks"]
      : null;

    if (storedData !== null) {
      let tasksList = storedData.map(createTask);
      return tasksList;
    }

    // Try fetch data from "data.json"
    const response = await fetch("data.json");
    const data = await response.json();
    let tasksList = data["tasks"].map(createTask);

    // Store data in localStorage for future use
    localStorage.setItem("tasks", JSON.stringify(new Tasks(tasksList)));

    return tasksList;
  } catch (error) {
    console.error("Error retrieving data", error);
  }
};

const getAfterElement = (container, y) => {
  const draggables = container.querySelectorAll(".draggable:not(.dragging)");
  draggables.forEach((element) => {});
  return [...draggables].reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - (box.top + box.height / 2);
      if (offset <= 0 && offset > closest.offset) {
        return {
          offset: offset,
          item: child,
        };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
      item: undefined,
    }
  ).item;
};

// LOGIC
// INITIAL STATE
let todo;
const tasks = document.querySelector(".tasks");
(async () => {
  let result = await fetchDATA();
  todo = new Tasks(result);

  if (todo.isNotEmpty()) {
    tasks.querySelector(
      ".tasks-lfet-number"
    ).textContent = `${todo.getUncompletedTasksNumber()} ${
      todo.getUncompletedTasksNumber() === 1 ? "item" : "items"
    } left`;

    todo.tasks.forEach((task) => {
      tasks.insertBefore(buildTask(task), tasks.querySelector(".settings"));
    });
    document.querySelector("main").classList.remove("hide");
  }
})();

// DRAG AND DROP
tasks.addEventListener("dragover", (event) => {
  event.preventDefault();
});

tasks.addEventListener("drop", (event) => {
  const data = event.dataTransfer.getData("text/plain");
  if (getAfterElement(tasks, event.clientY)) {
    tasks.insertBefore(
      document.getElementById(data),
      getAfterElement(tasks, event.clientY)
    );
    todo.reorderTasks(data, getAfterElement(tasks, event.clientY).id);
    localStorage.setItem("tasks", JSON.stringify(todo));
  } else {
    tasks.insertBefore(
      document.getElementById(data),
      document.querySelector(".settings")
    );
    todo.reorderTasks(data);
    localStorage.setItem("tasks", JSON.stringify(todo));
  }
});

// CLEAR COMPLETED TASKS
const clear = document.querySelector(".clear-all-btn");

clear.addEventListener("click", () => {
  todo.removeCompletedTasks();
  localStorage.setItem("tasks", JSON.stringify(todo));
  const tasks = document.querySelector(".tasks");
  [...tasks.children].forEach((element) => {
    if (element.classList.contains("completed")) {
      element.remove();
    }
  });
  if (!todo.isNotEmpty()) {
    document.querySelector("main").classList.add("hide");
  }
});

// FILTER
const menu = document.querySelector(".settings menu");
menu.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    if (event.target.textContent === "All") {
      menu.querySelectorAll("li").forEach((li) => {
        if (li.textContent !== event.target.textContent) {
          li.classList.remove("selected");
        } else {
          li.classList.add("selected");
        }
      });
      const tasks = document.querySelector(".tasks");
      [...tasks.children].forEach((child) => {
        if (child.classList.contains("task")) {
          if (child.classList.contains("hide")) {
            child.classList.remove("hide");
          }
        }
      });
    } else if (event.target.textContent === "Active") {
      menu.querySelectorAll("li").forEach((li) => {
        if (li.textContent !== event.target.textContent) {
          li.classList.remove("selected");
        } else {
          li.classList.add("selected");
        }
      });
      event.target.classList.add("selected");
      const tasks = document.querySelector(".tasks");
      [...tasks.children].forEach((child) => {
        if (child.classList.contains("task")) {
          if (child.classList.contains("completed")) {
            child.classList.add("hide");
          } else {
            child.classList.remove("hide");
          }
        }
      });
    } else if (event.target.textContent === "Completed") {
      menu.querySelectorAll("li").forEach((li) => {
        if (li.textContent !== event.target.textContent) {
          li.classList.remove("selected");
        } else {
          li.classList.add("selected");
        }
      });
      event.target.classList.add("selected");
      const tasks = document.querySelector(".tasks");
      [...tasks.children].forEach((child) => {
        if (child.classList.contains("task")) {
          if (!child.classList.contains("completed")) {
            child.classList.add("hide");
          } else {
            child.classList.remove("hide");
          }
        }
      });
    }
  }
});

// ADD NEW TASK
const input = document.querySelector("#task");
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (input.value.trim().length !== 0) {
      let task = new Task(input.value.trim());
      todo.addTask(task);
      localStorage.setItem("tasks", JSON.stringify(todo));
      input.value = null;
      document.querySelector("main").classList.remove("hide");
      tasks.prepend(buildTask(task));
      tasks.querySelector(
        ".tasks-lfet-number"
      ).textContent = `${todo.getUncompletedTasksNumber()} ${
        todo.getUncompletedTasksNumber() === 1 ? "item" : "items"
      } left`;
    }
  }
});

// TOGGLE THEME
const theme = document.querySelector(".theme-img");
theme.addEventListener("click", () => {
  if (getComputedStyle(theme).backgroundImage.includes("sun")) {
    setThemeColors("light");
    applyTheme("light");
  } else {
    setThemeColors("dark");
    applyTheme("dark");
  }
});
