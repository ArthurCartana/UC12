const btn = document.getElementById("btn");
const img = document.getElementById("img");

btn.addEventListener("click", () => {
    if (img.getAttribute("src") == "assets/images/m2-cs.jpg") {
        img.setAttribute("src", "assets/images/m4-cs.jpg");
    } else {
        img.setAttribute("src", "assets/images/m2-cs.jpg")
    }
})