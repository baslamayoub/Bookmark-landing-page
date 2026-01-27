const burger = document.querySelector(".burger");
const btnTabs = document.querySelectorAll(".btntab");
const tabs = document.querySelectorAll("#tab");
console.log(btnTabs[1]);

const social = document.querySelector(".bottom-footer-social");
const nav = document.querySelector("nav");

nav.appendChild(social);
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

btnTabs.forEach((el) => {
  el.addEventListener("click", () => {
    console.log(Number(el.dataset.num));
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabs[Number(el.dataset.num)].classList.add("active");
  });
});
