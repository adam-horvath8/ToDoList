// Imports
import createButton from "./create-element-modules/create-button.js";
import createIconSpan from "./create-element-modules/create-icon-span.js";

// create Header
function createHeader(text) {
  const header = document.createElement("header");
  header.classList.add("header");

  const heading = document.createElement("h1");
  heading.textContent = text;
  heading.classList.add("header-heading");

  const iconHeading = createIconSpan(
    "icon-header-heading",
    "material-symbols-outlined",
    "done_all"
  );

  header.append(iconHeading, heading);

  return header;
}
// create Main
function createMain() {
  const main = document.createElement("main");

  return main;
}

function createMainSection() {
  const mainSection = document.createElement("div");
  mainSection.id = "main-section";
  mainSection.classList.add("main-section");

  const toDoSection = createToDoBtnSection();
  mainSection.appendChild(toDoSection);

  const todoItemsDiv = createTodoItemsDiv();
  mainSection.appendChild(todoItemsDiv);

  return mainSection;
}

export const toDoSectionBtn = createButton(
  "to-do-section-btn",
  "to-do-section-btn",
  "",
  "icon-todo-section-btn",
  "add"
);

function createToDoBtnSection() {
  const toDoSection = document.createElement("div");
  toDoSection.id = "to-do-section";
  toDoSection.classList.add("to-do-section");

  toDoSection.appendChild(toDoSectionBtn);

  return toDoSection;
}

function createTodoItemsDiv() {
  const todoItemsDiv = document.createElement("div");
  todoItemsDiv.id = "todo-items-div";
  todoItemsDiv.classList.add("todo-items-div");

  return todoItemsDiv;
}

// create Sidebar
function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  sidebar.classList.add("sidebar");

  const nav = createNav();

  const projectsDiv = createProjectsDiv("Projects");

  sidebar.append(nav, projectsDiv);

  return sidebar;
}

function createNav() {
  const nav = document.createElement("nav");

  const toDoBtn = createButton(
    "todo-btn",
    "nav-btn",
    "Todo",
    "icon-todo-btn",
    "check_box"
  );

  const todayBtn = createButton(
    "today-btn",
    "nav-btn",
    "Today",
    "icon-today-btn",
    "today"
  );
  const weekBtn = createButton(
    "week-btn",
    "nav-btn",
    "This week",
    "icon-today-btn",
    "calendar_month"
  );

  nav.append(toDoBtn, todayBtn, weekBtn);

  return nav;
}

export const addProjectBtn = createButton(
  "add-project-btn",
  "add-project-btn",
  "Add Project",
  "icon-project-btn",
  "add"
);
export function createProjectsDiv(text) {
  const projectsDiv = document.createElement("div");
  projectsDiv.id = "projects-div";
  projectsDiv.classList.add("projects-div");

  const projectsDivHeading = document.createElement("h2");
  projectsDivHeading.textContent = text;
  projectsDivHeading.classList.add("projects-div-heading");
  projectsDiv.appendChild(projectsDivHeading);

  const addProjectBtnDiv = createAddProjectBtnDiv();
  projectsDiv.appendChild(addProjectBtnDiv);

  addProjectBtnDiv.appendChild(addProjectBtn);
  
  const projectObejctDiv = createProjectObjectDiv();
  projectsDiv.appendChild(projectObejctDiv);

  return projectsDiv;
}

function createAddProjectBtnDiv() {
  const addProjectBtnDiv = document.createElement("div");
  addProjectBtnDiv.id = "add-project-btn-div";
  addProjectBtnDiv.classList.add("add-project-btn-div");

  return addProjectBtnDiv;
}

function createProjectObjectDiv() {
  const projectObjectDiv = document.createElement("div");
  projectObjectDiv.id = "project-object-div";
  projectObjectDiv.classList.add("project-object-div");

  return projectObjectDiv;
}

// create Footer
function createFooter() {
  const footer = document.createElement("footer");

  const span = document.createElement("span");
  span.textContent = "created by Adam Horváth, Slovakia, 2023";
  span.classList.add("footer-text");

  footer.appendChild(span);

  return footer;
}

// load Page
function loadPage() {
  const container = document.getElementById("container");

  const header = createHeader("Todo List");
  container.appendChild(header);

  const main = createMain();
  container.appendChild(main);

  const sidebar = createSidebar();
  main.appendChild(sidebar);

  const mainSection = createMainSection();
  main.appendChild(mainSection);

  const footer = createFooter();
  container.appendChild(footer);
}

export default loadPage;
