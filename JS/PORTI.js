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

document.querySelector('.intro-image').addEventListener('click', () => {
    document.querySelector('.intro-image').style.transform = 'scale(1.2)';
    document.querySelector('.intro-image').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.intro-image').style.display = 'none';
      document.querySelector('.site-content').classList.add('active');
    }, 1000); // 1 segundo para coincidir com a transição de 1s no CSS
  });