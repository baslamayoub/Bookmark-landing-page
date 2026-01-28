const burger = document.querySelector(".burger");
const logo = document.querySelector(".logo");
const btnTabs = document.querySelectorAll(".btntab");
const tabs = document.querySelectorAll(".feature");

const social = document.querySelector(".bottom-footer-social");
const nav = document.querySelector("nav");


nav.appendChild(social);
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  logo.classList.toggle("active");
  burger.classList.toggle("active");
});

btnTabs.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.remove("active");
    console.log(Number(el.dataset.num));
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabs[Number(el.dataset.num)].classList.add("active");
    btnTabs.forEach((el) => {
      el.classList.remove("active");
    });
    btnTabs[Number(el.dataset.num)].classList.add("active");
    console.log(Number(el.dataset.num) + el.classList);
  });
});
