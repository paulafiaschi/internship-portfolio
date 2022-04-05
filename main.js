import "./sass/style.scss";

new ClipboardJS(".email-btn");

document.querySelector(".copy").addEventListener("click", changeIcon);

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
