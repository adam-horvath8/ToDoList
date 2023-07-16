import createInput from "./create-element-modules/create-input.js";
import createButton from "./create-element-modules/create-button.js";
import loadToDoItem from "./todo-item-modules/load-todo-item.js";
import { toDoSectionBtn } from "./initial-page.js";

export const itemInput = createInput(
  "text",
  "item-input",
  "item-input",
  "Add Todo",
  "required"
);

export const dateInput = createInput(
  "date",
  "date-input",
  "date-input",
  "Add date",
  "required"
);

export const addItemFormBtn = createButton(
  "add-item-btn",
  "add-item-btn",
  "Add",
  "icon-form-add-btn",
  "add"
); // add icon
addItemFormBtn.setAttribute("type", "submit");

addItemFormBtn.addEventListener("click", loadToDoItem);

export const closeItemFormBtn = createButton(
  "close-item-btn",
  "close-item-btn",
  "Close",
  "icon-close-form-btn",
  "close"
); // add icon
closeItemFormBtn.setAttribute("type", "button");
closeItemFormBtn.addEventListener("click", function () {
  const form = document.getElementById("item-form");
  form.remove();
});

function createItemForm() {
  const form = document.createElement("form");
  form.id = "item-form";
  form.classList.add("item-form");

  form.appendChild(itemInput);

  form.appendChild(dateInput);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("item-form-button-div");

  buttonsDiv.appendChild(addItemFormBtn);
  form.appendChild(buttonsDiv);

  buttonsDiv.appendChild(closeItemFormBtn);
  form.appendChild(buttonsDiv);

  return form;
}

function loadItemForm() {
  const toDoSecion = document.getElementById("to-do-section");

  const form = createItemForm();

  toDoSecion.appendChild(form);
}

toDoSectionBtn.addEventListener("click", function () {
  const form = document.getElementById("item-form");
  if (!form) {
    loadItemForm();
  }
});
