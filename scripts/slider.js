const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const cards = document.querySelectorAll(".card");
const wrapper = document.querySelector(".wrapper");


const cardStyle = getComputedStyle(cards[0]);
const cardMargin = parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
const cardWidth = cards[0].offsetWidth + cardMargin;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollBy({
            left: btn.id === "left" ? -cardWidth : cardWidth,
            behavior: "smooth"
        });
    });
});

const handleBtns = () => {
    arrowBtns[0].style.display = carousel.scrollLeft <= 0 ? "none" : "block";
    arrowBtns[1].style.display = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1 ? "none" : "block";
};

carousel.addEventListener("scroll", handleBtns);
handleBtns();