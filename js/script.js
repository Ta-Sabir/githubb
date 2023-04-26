// nav Section
let list = document.querySelectorAll(".liste");
function activelink() {
  list.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
list.forEach((item) => {
  item.addEventListener("click", activelink);
});
// Change The Language
let IconLang = document.querySelectorAll(".IconLang");
let dataLang = document.querySelectorAll("[data-lang]");
IconLang.forEach((e) => {
  e.onclick = function () {
    let langChange = e.dataset.language;
    dataLang.forEach((item) => {
      item.innerHTML = transition[langChange][item.dataset.lang];
    });
    if (langChange === "ar") {
      document.body.classList.add("ar");
    } else {
      document.body.classList.remove("ar");
    }
    localStorage.setItem("lang", langChange);
  };
});
// // Change The Language With LocalStorage
// let langlocalstorag = localStorage.getItem("lang");
// if (langlocalstorag !== null) {
//   dataLang.forEach((item) => {
//     item.innerHTML = transition[langlocalstorag][item.dataset.lang];
//   });
//   if (langlocalstorag === "ar") {
//     document.body.classList.add("ar");
//   } else {
//     document.body.classList.remove("ar");
//   }
// }
// Dark Mode
let darkMode = document.querySelector(".darkMode");
let darkmodeIcon = document.querySelector(".darkMode i");
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkmodeIcon.classList.toggle("bx-moon");
  darkmodeIcon.classList.toggle("bx-sun");
});
// Contact Me Section
let inputs = document.querySelectorAll("input");
function focusFunction() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurFunction() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunction);
  input.addEventListener("blur", blurFunction);
});
// Icon Scroll Top
let scrollTop = document.querySelector(".scrollTop")

window.onscroll = function () {
  if (scrollY > 350) {
    scrollTop.style.transform = "translateX(0)";
  } else if (document.body.classList.contains("ar")) {
    scrollTop.style.transform = "translateX(-100px)";
  } else {
    scrollTop.style.transform = "translateX(100px)";
  }
}
