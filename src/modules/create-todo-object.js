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
  itemDivLeft.appendChild(checkBox);

  const itemTextSpan = document.createElement("span");
  itemTextSpan.id = "item-text-span";
  itemTextSpan.classList.add("item-text-span");
  itemTextSpan.textContent = text;
  itemDivLeft.appendChild(itemTextSpan);

  const itemDateSpan = document.createElement("span");
  itemDateSpan.id = "item-date-span";
  itemDateSpan.classList.add("item-date-span");
  itemTextSpan.textContent = date;
  itemDivRigth.appendChild(itemDateSpan);

  const star = document.createElement("i");
//   star.classList.add("");
  star.id = "star";
  itemDivRigth.appendChild(star);

  const closeBtn = document.createElement("i");
  closeBtn.id = "todo-item-close-btn";
  closeBtn.classList.add("todo-item-close-btn");
  itemDivRigth.appendChild(star);

  return itemDiv;
}

export default createToDoItem;
