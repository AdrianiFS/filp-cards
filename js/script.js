// import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// *********** NAV
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");
allEventListners();
function allEventListners() {
  navToggler.addEventListener("click", togglerClick);
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}
// ************** CARD ANIMATION
let activeClass = () => {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      cards.forEach((crd) => crd.classList.remove("active"));
      this.classList.add("active");
    });
  });
};
activeClass();

// ********** FOOTER
let date = (document.querySelector(
  ".date"
).innerHTML += new Date().toUTCString().slice(12, 16));

// ************* DATE
const getAge = (dob) => {
  let today = new Date();
  let birthDay = new Date(dob);
  let age = today.getFullYear() - birthDay.getFullYear();
  let month = today.getMonth() - birthDay.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDay.getDate())) {
    age = age - 1;
  }
  return age;
};
// ************* SCROLL TOP BUTTON
var buttonTop = document.getElementById("buttonTop");
window.onscroll = function () {
  scrollToTop();
};
const scrollToTop = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
};
buttonTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// // ********* CARDS
const renderingCards = (students) => {
  const cards = document.querySelector(".cards");
  let str = "";
  students.forEach((el) => {
    str += `<div class="card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="avatar__card"> <img src="${el.photo}"></div>
       <h1 >${el.name}</h1>
       <p> ${getAge(el.age)} ans</p>
       <p>${el.status}</p>
      </div>
      <div class="flip-card-back">
        <div class="flip__card__back--inner">
          <h1 id="mytitle">${el.name}</h1>
          <p>
            ${el.description}
          </p>
        </div>
      </div>
    </div>
  </div>`;
  });
  cards.innerHTML = str;
};
renderingCards(students);
activeClass();

// ***************** FILTERING

function searching() {
  const searchBar = document.forms["search__stud"].querySelector("input");
  searchBar.addEventListener("keyup", (e) => {
    const inputVal = e.target.value.toLowerCase();
    let keyword = inputVal;
    let filterStuds = students.filter((stud) => {
      let learner = stud.name.toLowerCase();
      return learner.indexOf(keyword) !== -1;
    });
    renderingCards(filterStuds);
    activeClass();
  });
}
searching();

//  ***************** FORM
let submitName = document.querySelectorAll("#name");
let submitText = document.querySelectorAll("#message");
let formshake = document.getElementById("contact-form");
let buttonSubmit = document
  .getElementById("button")
  .addEventListener("click", function (e) {
    if (submitName["0"].validity.valid && submitText["0"].validity.valid) {
      e.preventDefault();
      formshake.classList.remove("activeForm");
    } else {
      formshake.classList.add("activeForm");
    }
  });
