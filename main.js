import "./sass/style.scss";

new ClipboardJS(".email-btn");

("use strict");

const button = document.querySelector(".btn");

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// Toggles the "dark-mode" class based on if the media query matches
function toggleDarkMode(state) {
  console.log(state);
  if (state === true) {
    document.querySelector("#toggle").innerHTML = "toggle_on";
    document.querySelector(".dark").classList.remove("material-icons-outlined");
    document.querySelector(".dark").classList.add("material-icons");
  } else {
    document.querySelector("#toggle").innerHTML = "toggle_off";
    document.querySelector(".light").classList.remove("material-icons-outlined");
    document.querySelector(".light").classList.add("material-icons");
  }
  document.documentElement.classList.toggle("dark-mode", state);
}

// Initial setting
toggleDarkMode(useDark.matches);

// Listen for changes in the OS settings
useDark.addListener((evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click
button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  if (document.documentElement.classList.contains("dark-mode")) {
    console.log("dark mode on");
    document.querySelector("#toggle").innerHTML = "toggle_on";
    document.querySelector(".dark").classList.remove("material-icons-outlined");
    document.querySelector(".dark").classList.add("material-icons");
    document.querySelector(".light").classList.add("material-icons-outlined");
    document.querySelector(".light").classList.remove("material-icons");
  } else {
    console.log("light mode on");
    document.querySelector("#toggle").innerHTML = "toggle_off";
    document.querySelector(".light").classList.remove("material-icons-outlined");
    document.querySelector(".light").classList.add("material-icons");
    document.querySelector(".dark").classList.add("material-icons-outlined");
    document.querySelector(".dark").classList.remove("material-icons");
  }
});

window.addEventListener("DOMContentLoaded", load);

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

window.addEventListener("DOMContentLoaded", load);

function load() {
  console.log("start");
  hamburger.addEventListener("click", toggleMenu);
  document.querySelector(".copy").addEventListener("click", changeIcon);
  document.querySelector(".email-btn").addEventListener("click", changeIcon2);
  document.querySelector("#xs").addEventListener("click", showXSBio);
  document.querySelector("#s").addEventListener("click", showSBio);
  document.querySelector("#m").addEventListener("click", showMBio);
  document.querySelector("#l").addEventListener("click", showLBio);
}

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

function changeIcon() {
  console.log("email copied");
  document.querySelector(".copy").innerHTML = "check";
  document.querySelector(".copy").style.backgroundColor = "rgb(71, 175, 71)";
  document.querySelector(".copy").style.color = "white";
  setTimeout(() => {
    document.querySelector(".copy").innerHTML = "content_copy";
    document.querySelector(".copy").style.color = "#133144";
    document.querySelector(".copy").style.backgroundColor = "#f7f8f9";
  }, 700);
}

function changeIcon2() {
  console.log("email copied");
  document.querySelector("#email").classList.remove("fa-envelope");
  document.querySelector("#email").classList.add("fa-check");
  document.querySelector("#email").style.backgroundColor = "rgb(71, 175, 71)";
  document.querySelector("#email").style.color = "white";
  setTimeout(() => {
    document.querySelector("#email").classList.remove("fa-check");
    document.querySelector("#email").classList.add("fa-envelope");
    document.querySelector("#email").style.color = "var(--color-dark)";
    document.querySelector("#email").style.backgroundColor = "var(--color-light)";
  }, 700);
}

function showXSBio() {
  document.querySelector("#s").classList.remove("accentBg");
  document.querySelector("#m").classList.remove("accentBg");
  document.querySelector("#l").classList.remove("accentBg");

  console.log("xs chosen");
  document.querySelector("#xs").classList.add("accentBg");
  document.querySelector("#bioXS").classList.remove("hidden");
  document.querySelector("#bioS").classList.add("hidden");
  document.querySelector("#bioM").classList.add("hidden");
  document.querySelector("#bioL").classList.add("hidden");
}
function showSBio() {
  document.querySelector("#xs").classList.remove("accentBg");
  document.querySelector("#m").classList.remove("accentBg");
  document.querySelector("#l").classList.remove("accentBg");

  console.log("s chosen");
  document.querySelector("#s").classList.add("accentBg");
  document.querySelector("#bioS").classList.remove("hidden");
  document.querySelector("#bioXS").classList.add("hidden");
  document.querySelector("#bioM").classList.add("hidden");
  document.querySelector("#bioL").classList.add("hidden");
}
function showMBio() {
  document.querySelector("#xs").classList.remove("accentBg");
  document.querySelector("#s").classList.remove("accentBg");
  document.querySelector("#l").classList.remove("accentBg");

  console.log("m chosen");
  document.querySelector("#m").classList.add("accentBg");
  document.querySelector("#bioM").classList.remove("hidden");
  document.querySelector("#bioXS").classList.add("hidden");
  document.querySelector("#bioS").classList.add("hidden");
  document.querySelector("#bioL").classList.add("hidden");
}
function showLBio() {
  document.querySelector("#xs").classList.remove("accentBg");
  document.querySelector("#s").classList.remove("accentBg");
  document.querySelector("#m").classList.remove("accentBg");

  console.log("l chosen");
  document.querySelector("#l").classList.add("accentBg");
  document.querySelector("#bioL").classList.remove("hidden");
  document.querySelector("#bioXS").classList.add("hidden");
  document.querySelector("#bioS").classList.add("hidden");
  document.querySelector("#bioM").classList.add("hidden");
}
