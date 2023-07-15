import createIconSpan from "./create-icon-span";

// create Buttons
function createButton(id, className, text, idIcon, iconName) {
  const button = document.createElement("button");
  button.setAttribute("id", id);
  button.classList.add(className);

  const spanText = document.createElement("span");
  spanText.id = "button-text";
  spanText.textContent = text;

  const spanIcon = createIconSpan(
    idIcon,
    "material-symbols-outlined",
    iconName
  );

  button.append(spanIcon, spanText);

  return button;
}

export default createButton;
