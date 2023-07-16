import createIconSpan from "../create-element-modules/create-icon-span";
import createButton from "../create-element-modules/create-button";

function createProjectObject(text) {
  const projectObjectSpan = createIconSpan(
    "project-object-span",
    "project-object-span",
    text
  );

  const deleteProjectbtn = createIconSpan(
    "icon-delete-project-btn",
    "material-symbols-outlined",
    "cancel"
  );
  deleteProjectbtn.addEventListener("click", function () {
    projectObjectSpan.remove();
  });

  projectObjectSpan.appendChild(deleteProjectbtn);

  return projectObjectSpan;
}

export default createProjectObject;
