const itemEls = document.querySelectorAll(".item");

console.log("Number of categories: ", itemEls.length);

itemEls.forEach(item => {
	console.log("Category: ", item.querySelector("h2").textContent);
	console.log("Elements: ", item.querySelectorAll("li").length);
});
