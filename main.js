import "./sass/style.scss";

new ClipboardJS(".email-btn");

document.querySelector(".copy").addEventListener("click", changeIcon);
document.querySelector(".email-btn").addEventListener("click", changeIcon2);

function changeIcon() {
  console.log("email copied");
  document.querySelector(".copy").innerHTML = "check";
  document.querySelector(".copy").style.backgroundColor = "rgb(71, 175, 71)";
  document.querySelector(".copy").style.color = "white";
  setTimeout(() => {
    document.querySelector(".copy").innerHTML = "content_copy";
    document.querySelector(".copy").style.color = "var(--color-dark)";
    document.querySelector(".copy").style.backgroundColor = "var(--color-light)";
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
