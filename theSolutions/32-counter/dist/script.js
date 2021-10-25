const minus = document.getElementById("minus");
const number = document.getElementById("number");
const plus = document.getElementById("plus");
let i = 0;

plus.onclick = () => updateNumber(1);
minus.onclick = () => updateNumber(-1);

function updateNumber(value) {
  i += value;
  number.childNodes.forEach((child) => {
    child.classList.contains("fadeOutDown") ||
    child.classList.contains("fadeOutUp")
      ? child.remove()
      : child.removeAttribute("class");
  });
  if (value > 0) {
    // fadeUp Animation
    number.lastElementChild.classList.add("fadeOutUp");
    number.insertAdjacentHTML("afterbegin", `<p class="fadeInUp">${i}</p>`);
  } else {
    // fadeDown Animation
    number.lastElementChild.classList.add("fadeOutDown");
    number.insertAdjacentHTML("afterbegin", `<p class="fadeInDown">${i}</p>`);
  }
}