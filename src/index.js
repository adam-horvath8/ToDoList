import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "./style.css";
import loadPage from "./modules/initial-page.js";
import loadItemForm from "./modules/load-item-form.js";
import loadToDoItem from "./modules/load-todo-item";

loadPage();
loadToDoItem();

const addItemBtn = document.getElementById("to-do-section-btn");
addItemBtn.addEventListener("click", loadItemForm);
