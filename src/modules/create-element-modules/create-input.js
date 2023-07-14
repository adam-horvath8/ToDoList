function createInput(type, id, className, placeholder) {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.id = id;
  input.classList.add(className);
  input.placeholder = placeholder;

  return input;
}

export default createInput;
