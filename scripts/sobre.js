//Animação iocones da apgina sobre.html
const images = document.querySelectorAll('.image-container img');
let index = 0;

function showImage() {
  if (index < images.length) {
    images[index].style.opacity = 1;
    index++;
  } else {
    clearInterval(interval);
  }
}

const interval = setInterval(showImage, 500);
