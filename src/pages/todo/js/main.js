import { Todo } from "./models/todo";

window.onload = function () {
  getListFromStorage();
};
//skapa tre hårdkodade object
/* let todoOne = new Todo(Date.now(), "Buy plane tickets", false);

let todoTwo = new Todo(Date.now(), "Book a hotel", false);

let todoThree = new Todo(Date.now(), "Pack my things", false); */

let todos = [
  /* todoOne, todoTwo, todoThree */
];

//hitta input button och lägga till event
let addButton = document.getElementById("mybtn");
addButton.addEventListener("click", function () {
  let inputField = document.getElementById("myinput");
  let inputText = inputField.value;

  //skapa variabel för nytt object och stoppa in content från användaren
  let userInput = new Todo(Date.now(), inputText, false);
  //kolla om inputruta inte är tom
  if (inputText.length == "0") {
    alert("Please, enter a task!");
  } else {
    todos.push(userInput);

    //rensa inputen
    inputField.value = "";

    displayTodos();
  }
});

//skapa header
/* let container = document.getElementById("head");
let header = document.createElement("h1");
header.innerText = "CheckIt ToDo list";
container.appendChild(header); */

function displayTodos() {
  let myList = document.getElementById("myList");
  //rensa innehållet
  myList.innerHTML = "";
  //loopa listan av todos och declarerar variabler för HTML taggar
  for (let i = 0; i < todos.length; i++) {
    let item = document.createElement("li");
    let check = document.createElement("input");
    let todoText = document.createElement("span");
    todoText.className = "myspan";

    check.setAttribute("type", "checkbox");
    check.className = "cbox";

    item.className = "li";
    //ändrar klass på punkt i listan, adderar tick mark till checkbox
    if (todos[i].done) {
      item.classList.add("checked");
      check.setAttribute("checked", true);
    }
    //lägga event på checkbox, togglar boolean värde på egenskap "done"
    check.addEventListener("click", () => {
      if (todos[i].done === false) {
        todos[i].done = true;
      } else {
        todos[i].done = false;
      }
      displayTodos();
    });

    //skapar HTML taggar input checkbox, li, span,

    item.appendChild(check);
    item.appendChild(todoText);
    myList.appendChild(item);

    //skriver ut todos i span tag på skärmen
    todoText.innerHTML += todos[i].content;

    //skickar listan av todos till LS
    localStorage.setItem("storageList", JSON.stringify(todos));
  }
}

displayTodos();

//hämtar listan från LS, göra om sträng till objekt, skapa nya objekten, pusha i todos och visa på skärmen
function getListFromStorage() {
  let storageList = JSON.parse(localStorage.getItem("storageList"));
  for (let i = 0; i < storageList.length; i++) {
    let newItem = new Todo(
      storageList[i].id,
      storageList[i].content,
      storageList[i].done
    );
    todos.push(newItem);
  }
  displayTodos();
}

function clearAll() {
  localStorage.clear();
  window.location.reload();
}

let deleteAllBtn = document.getElementById("deleteAll");
deleteAllBtn.addEventListener("click", clearAll);
