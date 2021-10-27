const flash = document.querySelector(".flash");
const keys = document.querySelectorAll(".key");
keys.forEach((key) => (key.id = `id${key.textContent}`));
const characters = {
	a: ".-",
	b: "-...",
	c: "-.-.",
	d: "-..",
	e: ".",
	f: "..-.",
	g: "--.",
	h: "....",
	i: "..",
	j: ".---",
	k: "-.-",
	l: ".-..",
	m: "--",
	n: "-.",
	o: "---",
	p: ".--.",
	q: "--.-",
	r: ".-.",
	s: "...",
	t: "-",
	u: "..-",
	v: "...-",
	w: ".--",
	x: "-..-",
	y: "-.--",
	z: "--..",
	0: "-----",
	1: ".----",
	2: "..---",
	3: "...--",
	4: "....-",
	5: ".....",
	6: "-....",
	7: "--...",
	8: "---..",
	9: "----."
};
function makeMorseAnimation(id) {
	let i = 1;
	let animation = "";
	characters[`${id.split("").pop().toLowerCase()}`].split("").forEach((e) => {
		if (e == ".") {
			if (animation === "") {
				animation += `short-${i} 1s ${(i - 1) * 1}s`;
				i++;
			} else {
				animation += `,short-${i} 1s ${(i - 1) * 1}s`;
				i++;
			}
		}
		if (e == "-") {
			if (animation === "") {
				animation += `long-${i} 1s ${(i - 1) * 1}s`;
				i++;
			} else {
				animation += `,long-${i} 1s ${(i - 1) * 1}s`;
				i++;
			}
		}
	});
	return animation;
}

for (let key in characters) {
	let animateMe = document.getElementById(`id${key.toUpperCase()}`);
	animateMe.addEventListener("click",()=>flash.style.animation = `${makeMorseAnimation(animateMe.id)}`)
}