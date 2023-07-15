function createIconSpan(id, className, text) {
  const span = document.createElement("span");
  span.setAttribute("id", id);
  span.classList.add(className);
  span.innerText = text;

  return span;
}

export default createIconSpan;
