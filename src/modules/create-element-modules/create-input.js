function createInput(type, id, className, placeholder, required) {
  const input = document.createElement("input");
  input.setAttribute("type", type);

  input.id = id;
  input.classList.add(className);
  input.placeholder = placeholder;
  input.required = required;

  return input;
}

export default createInput;
