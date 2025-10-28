
const typing = document.querySelector(".typing");
const text = ["AI & ML Student", "Frontend Developer", "Tech Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect() {
  current = text[i];
  typing.textContent = current.substring(0, j);
  if (!isDeleting && j++ === current.length + 10) isDeleting = true;
  else if (isDeleting && --j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
typeEffect();


const scrollBtn = document.getElementById("scrollTop");
window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) scrollBtn.style.display = "block";
  else scrollBtn.style.display = "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
