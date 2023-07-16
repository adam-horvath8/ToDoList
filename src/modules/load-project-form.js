import createButton from "./create-element-modules/create-button";
import createInput from "./create-element-modules/create-input";
import { addProjectBtn } from "./initial-page.js";
import loadProjectInput from "./project-item-modules/load-project-input";
// import { createProjectsDiv } from "./initial-page.js";

export const projectNameInput = createInput(
  "text",
  "project-name-input",
  "project-name-input"
);

const addProjectFormBtn = createButton(
  "add-project-form-btn",
  "add-project-form-btn",
  "Add",
  "icon-form-add-btn",
  "add"
);
addProjectFormBtn.setAttribute("type", "button");
addProjectFormBtn.addEventListener("click", loadProjectInput);

const closeProjectFormBtn = createButton(
  "close-project-form-btn",
  "close-project-form-btn",
  "Close",
  "icon-close-form-btn",
  "close"
);
closeProjectFormBtn.addEventListener("click", function () {
  const form = document.getElementById("project-form");
  form.remove();
  const addProjectBtnDiv = document.getElementById("add-project-btn-div");
  addProjectBtnDiv.appendChild(addProjectBtn);
});

function createProjectForm() {
  const form = document.createElement("form");
  form.id = "project-form";
  form.classList.add("project-form");

  form.appendChild(projectNameInput);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("project-buttons-div");

  buttonsDiv.append(addProjectFormBtn, closeProjectFormBtn);
  form.appendChild(buttonsDiv);

  return form;
}

function loadProjectForm() {
  const addProjectFormBtn = document.getElementById("add-project-btn-div");

  const form = createProjectForm();

  addProjectFormBtn.appendChild(form);
}

addProjectBtn.addEventListener("click", function () {
  const form = document.getElementById("project-form");
  if (!form) {
    loadProjectForm();
  }
  addProjectBtn.remove();
});
