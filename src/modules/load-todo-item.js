import createToDoItem from "./create-todo-object.js";
import { itemInput, dateInput } from "./load-item-form.js";

function loadToDoItem() {
  const mainSecion = document.getElementById("main-section");
  const item = createToDoItem(itemInput.value, dateInput.value);
  mainSecion.appendChild(item);
}

export default loadToDoItem;
