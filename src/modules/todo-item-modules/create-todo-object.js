import createIconSpan from "../create-element-modules/create-icon-span.js";

function createToDoItem(text, date) {
  const itemDiv = document.createElement("div");
  itemDiv.id = "item-todo-div";
  itemDiv.classList.add("item-todo-div");

  const itemDivLeft = document.createElement("div");
  itemDivLeft.id = "item-left-div";
  itemDivLeft.classList.add("item-left-div");
  itemDiv.appendChild(itemDivLeft);

  const itemDivRigth = document.createElement("div");
  itemDivRigth.id = "item-rigth-div";
  itemDivRigth.classList.add("item-rigth-div");
  itemDiv.appendChild(itemDivRigth);

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.id = "item-checkbox";
  checkBox.addEventListener("change", function () {
    if (checkBox.checked) {
      itemDiv.classList.add("checked-item-div");
    } else {
      itemDiv.classList.remove("checked-item-div");
    }
  });
  itemDivLeft.appendChild(checkBox);

  const itemTextSpan = document.createElement("span");
  itemTextSpan.id = "item-text-span";
  itemTextSpan.classList.add("item-text-span");
  itemTextSpan.textContent = text;
  itemDivLeft.appendChild(itemTextSpan);

  const itemDateSpan = document.createElement("span");
  itemDateSpan.id = "item-date-span";
  itemDateSpan.classList.add("item-date-span");
  itemDateSpan.textContent = date;
  itemDivRigth.appendChild(itemDateSpan);

  const star = createIconSpan("star", "material-symbols-outlined", "star");
  star.addEventListener("click", function () {
    star.classList.toggle("star-active");
  });
  itemDivRigth.appendChild(star);

  const closeBtn = createIconSpan(
    "todo-item-close-btn",
    "material-symbols-outlined",
    "cancel"
  );
  closeBtn.addEventListener("click", function () {
    itemDiv.remove();
  });
  itemDivRigth.appendChild(closeBtn);

  return itemDiv;
}

export default createToDoItem;
