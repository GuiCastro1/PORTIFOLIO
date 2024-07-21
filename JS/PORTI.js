const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0;

function Carrossel() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 300}px)`
}
setInterval(Carrossel, 3000)
imgs.style.width = `${img.length *300}px`