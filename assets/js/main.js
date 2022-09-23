// Aside
const burgerBtn = document.querySelector(".top__wrp__aside-btn");
const closeBtn = document.querySelector(".top__wrp__mobile__content__btn img");
const asideMenu = document.querySelector(".top__wrp__mobile");

burgerBtn.addEventListener("click", (e) => {
  asideMenu.classList.add("show");
});

closeBtn.addEventListener("click", (e) => {
  asideMenu.classList.remove("show");
});

// Dynamic width
const rates = document.querySelectorAll(".skills__content__skill__info__rate");
const bars = document.querySelectorAll(".skills__content__skill__bar__inside");

rates.forEach((rate, index) => {
  let width = rate.innerText;
  bars[index].style.width = width;
});
