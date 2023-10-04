window.addEventListener("resize", function () {
    var elemento = document.querySelector(".ocultar");
    elemento.style.display = (window.innerWidth <= 768) ? "block" : "none";
});