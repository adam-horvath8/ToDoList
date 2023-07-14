// Imports
import createButton from "./create-element-modules/create-button.js";
// create Header
function createHeader(text) {
  const header = document.createElement("header");
  header.classList.add("header");

  const icon = document.createElement("i");
  icon.classList.add("fa-list-check");

  const heading = document.createElement("h1");
  heading.textContent = text;
  heading.classList.add("header-heading");

  header.append(icon, heading);

  return header;
}
// create Main
function createMain() {
  const main = document.createElement("main");

  return main;
}

// create Main Section
function createMainSection() {
  const mainSection = document.createElement("div");
  mainSection.id = "main-section";
  mainSection.classList.add("main-section");
  // add Todo section
  function createToDoSection() {
    const toDoSection = document.createElement("div");
    toDoSection.id = "to-do-section";
    toDoSection.classList.add("to-do-section");

    const toDoSectionBtn = createButton(
      "to-do-section-btn",
      "to-do-section-btn",
      "Add Todo"
    );

    toDoSection.appendChild(toDoSectionBtn);

    return toDoSection;
  }

  const toDoSection = createToDoSection();
  mainSection.appendChild(toDoSection);

  return mainSection;
}

// create Sidebar
function createSidebar() {
  function createNav() {
    const nav = document.createElement("nav");

    const toDoBtn = createButton("todo-btn", "nav-btn", "Todo", "fa-house");
    const todayBtn = createButton("today-btn", "nav-btn", "Today");
    const weekBtn = createButton("week-btn", "nav-btn", "This week");

    nav.append(toDoBtn, todayBtn, weekBtn);

    return nav;
  }

  function createProjectsDiv(text) {
    const projectsDiv = document.createElement("div");
    projectsDiv.id = "projects-div";
    projectsDiv.classList.add("projects-div");

    const projectsDivHeading = document.createElement("h2");
    projectsDivHeading.textContent = text;
    projectsDivHeading.classList.add("projects-div-heading");
    projectsDiv.appendChild(projectsDivHeading);

    const addProjectBtn = createButton(
      "add-project-btn",
      "add-btn",
      "Add Project"
    );
    projectsDiv.appendChild(addProjectBtn);

    return projectsDiv;
  }

  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  sidebar.classList.add("sidebar");

  const nav = createNav();

  const projectsDiv = createProjectsDiv("Projects");

  sidebar.append(nav, projectsDiv);

  return sidebar;
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
