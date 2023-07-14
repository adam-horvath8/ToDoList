import createInput from "./create-element-modules/create-input.js";
import createButton from "./create-element-modules/create-button.js";

export const itemInput = createInput(
  "text",
  "item-input",
  "item-input",
  "Add Todo"
);

export const dateInput = createInput(
  "date",
  "date-input",
  "date-input",
  "Add date"
);

function loadItemForm() {
  function createItemForm() {
    const form = document.createElement("form");
    form.id = "item-form";
    form.classList.add("item-form");

    form.appendChild(itemInput);

    form.appendChild(dateInput);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("item-form-button-div");

    const addItemBtn = createButton("add-item-btn", "add-item-btn", "Add"); // add icon
    addItemBtn.setAttribute("type", "button");

    buttonsDiv.appendChild(addItemBtn);
    form.appendChild(buttonsDiv);

    const closeItemBtn = createButton(
      "close-item-btn",
      "close-item-btn",
      "Close"
    ); // add icon
    closeItemBtn.setAttribute("type", "button");

    buttonsDiv.appendChild(closeItemBtn);
    form.appendChild(buttonsDiv);

    return form;
  }

  const mainSection = document.getElementById("main-section");

  const form = createItemForm();

  mainSection.appendChild(form);
}

export default loadItemForm;
