const header = document.querySelector(".header");
const content = document.querySelector(".content");
const boxes = [...content.children];
const tabs = [...header.children];
tabs.pop();

for (let i in tabs) {
	tabs[i].addEventListener("click", () => {
		for (let i in tabs) tabs[i].removeAttribute("class");
		tabs[i].classList.add("tab-active");
		for (let box of boxes) box.classList.remove("box-active");
		boxes[i].classList.add("box-active");
	});
}
