const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = document.querySelector("ul#ingredients");

const ingredientEls = ingredients.map(ingredient => {
	const ingredientEl = document.createElement("li");
	ingredientEl.textContent = ingredient;
	ingredientEl.className = "item";
	return ingredientEl;
});

ingredientsList.append(...ingredientEls);
