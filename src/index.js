import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "./style.css";
import loadPage from "./modules/initial-page.js";
import "./modules/load-project-form.js";
import loadItemForm, { dateInput } from "./modules/load-item-form.js";
import { format } from "date-fns";
// import loadToDoItem from "./modules/todo-item-modules/load-todo-item";
// import loadProjectForm from "./modules/load-project-form.js";
// import { addProjectBtn } from "./modules/load-project-form.js";
// import { addItemFormBtn, closeItemFormBtn } from "./modules/load-item-form.js";

loadPage();

