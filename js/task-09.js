function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtn = document.querySelector("button.change-color");
const colorEl = document.querySelector("span.color");

changeColorBtn.addEventListener("click", () => {
	const randomColor = getRandomHexColor();
	bodyEl.style.backgroundColor = randomColor;
	colorEl.textContent = randomColor;
});
