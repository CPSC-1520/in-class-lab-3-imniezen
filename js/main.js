// Enter your code below.

//Step 1
let showResources = document.querySelector(".px-3.cover-container.d-flex.w-100.h-100.p-3.mx-auto.flex-column");
let showResourcesButton = document.querySelector("#show-resources");

showResourcesButton.addEventListener("click", function() {
    showResources.innerHTML = showResources.innerHTML.replace("d-none ", "");
})

//Step 2
showResources.addEventListener("mouseover", (event) => {
    event.target.classList.add("fw-bold");

})

//Step 3
showResources.addEventListener("mouseout", (event) => {
    event.target.classList.remove("fw-bold");
})

//Step 4
showResources.addEventListener("click", (event) => {
    event.target.classList.add("fst-italic");
})