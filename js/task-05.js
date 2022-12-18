const nameInputEl = document.querySelector("input#name-input");
const nameOutputEl = document.querySelector("span#name-output");

nameInputEl.addEventListener("input", () => {
	if (nameInputEl.value.trim() === "") {
		nameOutputEl.textContent = "Anonymous";
	} else {
		nameOutputEl.textContent = nameInputEl.value.trim();
	}
});
