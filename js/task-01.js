// const categoriesEl = document.querySelector("#categories");
const itemEls = document.querySelectorAll(".item");
// const categoriesTitleEls = document.querySelectorAll(".item h2");

console.log("Number of categories: ", itemEls.length);

itemEls.forEach(item => {
	console.log("Category: ", item.querySelector("h2").textContent);
	console.log("Elements: ", item.querySelectorAll("li").length);
});

// console.log(categoriesTitleEls);
