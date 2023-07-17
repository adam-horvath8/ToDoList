import createToDoItem from "./create-todo-object.js";
import { itemInput, dateInput } from "../load-item-form.js";
import { getInputValue } from "../load-item-form.js";
import { format } from "date-fns";

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
}

export default loadToDoItem;
