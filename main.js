const container = document.getElementById("container");
const feedback = container.getElementsByClassName("feedback");
const active = document.getElementsByClassName("active");
const first = document.getElementById("first");
const container2 = document.getElementById("container2");
let response;
for (let i = 0; i < feedback.length; i++) {
  feedback[i].addEventListener("click", function () {
    if (active.length > 0) {
      active[0].classList.remove("active");
    }
    this.classList.add("active");
    let text = this.getElementsByClassName("text");
    response = text[0].innerHTML;
  });
}
let review = document.getElementById("review");
review.addEventListener("click", myfun);
function myfun() {
  container.style.display = "none";
  container2.style.display = "flex";
  first.innerHTML = "Thank you!";
  document.getElementById("second").innerHTML = "Your Feedback: " + response;
  document.getElementById("third").innerHTML = "Best luck";
}
