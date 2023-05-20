var container=document.getElementById("container");
var feedback=container.getElementsByClassName("feedback");
var active=document.getElementsByClassName("active");
var first=document.getElementById("first");
var container2=document.getElementById("container2");
var arman2;
for (var i = 0; i < feedback.length; i++) {
    feedback[i].addEventListener("click", function() {
        if (active.length > 0) {
            active[0].classList.remove("active");
        }
        this.classList.add("active");
        var arman=this.getElementsByClassName("text");
        arman2=arman[0].innerHTML
        
        }
    )
}
var review=document.getElementById("review");
review.addEventListener("click",myfun);
function myfun() {
    container.style.display="none";
    container2.style.display="flex";
    first.innerHTML="Thank you!"
    document.getElementById("second").innerHTML=arman2;
    document.getElementById("third").innerHTML="Best luck";
}