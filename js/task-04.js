const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

const onDecrementBtnClick = () => {
	counterValue -= 1;
	valueEl.textContent = counterValue;
};

const onIncrementBtnClick = () => {
	counterValue += 1;
	valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
