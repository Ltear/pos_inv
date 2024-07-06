const btnAdd = document.getElementById("btnAdd"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnClose = document.getElementById("btnClose");

btnAdd.addEventListener("click", function () {
    overlay.classList.add("active");
    popup.classList.add("active");
});

btnClose.addEventListener("click", function () {
    overlay.classList.remove("active");
    popup.classList.remove("active");
});
