import createToDoItem from "./create-todo-object.js";
import { itemInput, dateInput } from "../load-item-form.js";

function loadToDoItem() {
  const toDoItemsDiv = document.getElementById("todo-items-div");
  const item = createToDoItem(itemInput.value, dateInput.value);
  toDoItemsDiv.appendChild(item);

  const form = document.getElementById("item-form");
  form.remove();
}

export default loadToDoItem;
