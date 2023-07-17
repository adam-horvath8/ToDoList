import createProjectObject from "./create-project-object";
import { projectNameInput } from "../load-project-form";
import { addProjectBtn } from "../initial-page";

function loadProjectInput() {
  const projectObjectDiv = document.getElementById("project-object-div");
  const projectObjects = projectObjectDiv.getElementsByTagName("span");
  if (projectObjects.length > 5) {
    alert("You can only add up to 5 projects");
  } else {
    if (projectNameInput.value !== "") {
      const project = createProjectObject(projectNameInput.value);
      projectObjectDiv.appendChild(project);
      projectNameInput.value = "";

      const form = document.getElementById("project-form");
      form.remove();

      const addProjectFormBtn = document.getElementById("add-project-btn-div");
      addProjectFormBtn.appendChild(addProjectBtn);

      return project;
    } else {
      alert("Enter project name");
    }
  }
}

export default loadProjectInput;
