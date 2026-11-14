
// const exploreButton = document.querySelector(".button");

// exploreButton.addEventListener("click", function () {
//     console.log("Welcome to Space Storytellers!");
// });

// const equipmentCards = document.querySelectorAll(".equipment-card");

// equipmentCards.forEach(function (card) {
//     card.addEventListener("click", function () {
//         card.classList.toggle("selected");
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    // Highlight the current page in the navbar
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
