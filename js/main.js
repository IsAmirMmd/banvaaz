const toggler = document.querySelector(".navbar__menu");
const navbar = document.querySelector(".navbar");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("navbar__expanded");
});

const accordionHeaders = document.querySelectorAll(".accordion__header");
const accordion = document.querySelector(".accordion");
accordionHeaders.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("accordion__expanded");
  });
});
