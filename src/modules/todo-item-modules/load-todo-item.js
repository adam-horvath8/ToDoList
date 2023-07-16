import createToDoItem from "./create-todo-object.js";
import { itemInput, dateInput } from "../load-item-form.js";

function loadToDoItem() {
  const toDoItemsDiv = document.getElementById("todo-items-div");
  if (itemInput.value !== "" && dateInput.value !== "") {
    const item = createToDoItem(itemInput.value, dateInput.value);
    toDoItemsDiv.appendChild(item);

    itemInput.value = "";
    dateInput.value = "";

    const form = document.getElementById("item-form");
    form.remove();
  }

  console.log(itemInput);
}

export default loadToDoItem;
