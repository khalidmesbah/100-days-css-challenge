const input = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

input.addEventListener("input", function () {
	let text = input.value;
	if (text.trim().length) {
		suggestions.innerHTML = "";
		suggestions.classList.add("active");
    suggestions.innerHTML += `
		<li><b>${text}</b></li>
		<li>Veritatis et <b>${text}</b></li>
		<li>ut aliquid ex <b>${text}</b> vero eos</li>`;
	} else {
		suggestions.classList.remove("active");
		suggestions.innerHTML = "";
	}
});
input.onblur = () => {
	suggestions.classList.remove("active");
};