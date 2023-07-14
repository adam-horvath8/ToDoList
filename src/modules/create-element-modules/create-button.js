// create Buttons
function createButton(id, className, text, icon) {
  const button = document.createElement("button");
  button.setAttribute("id", id);
  button.classList.add(className);

  const BtnIcon = document.createElement("i");
  BtnIcon.classList.add(icon);

  const span = document.createElement("span");
  span.textContent = text;

  button.append(BtnIcon, span);

  return button;
}

export default createButton;
