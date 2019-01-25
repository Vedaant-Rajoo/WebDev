var but = document.querySelector("button");
var body = document.querySelector("body");
var ispurple = false;
but.addEventListener("click", chng);

function chng() {


    if (ispurple) {
        body.style.background = "white";


    } else
        body.style.background = "purple";

    ispurple = !ispurple;

}