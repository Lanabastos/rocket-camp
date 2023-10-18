window.addEventListener("resize", function () {
    var elemento = document.querySelector(".ocultar");
    elemento.style.display = (window.innerWidth <= 745) ? "block" : "none";
});
