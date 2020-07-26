/*----------------------- [ Photo Background] -------------------------*/
var leftSide = document.getElementById("left-side");
window.addEventListener("scroll", function () {
    leftSide.style.left = -window.pageYOffset + "px";
})

var rightSide = document.getElementById("right-side");
window.addEventListener("scroll", function () {
    rightSide.style.left = window.pageYOffset + "px";
})