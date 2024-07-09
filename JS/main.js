document.querySelector('.intro-image').addEventListener('click', () => {
    document.querySelector('.intro-image').style.transform = 'scale(1.2)';
    document.querySelector('.intro-image').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.intro-image').style.display = 'none';
      document.querySelector('.site-content').classList.add('active');
    }, 1000); // 1 segundo para coincidir com a transição de 1s no CSS
  });