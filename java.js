let slideIndex = 0; 
showSlides(slideIndex);

// Función para avanzar o retroceder (n = 1 para siguiente, -1 para anterior)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Función principal que muestra el slide correcto
function showSlides(n) {
  let slides = document.getElementsByClassName("carrusel-slide");
  
  // Lógica para que el carrusel sea cíclico (volver al inicio o al final)
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  // Oculta todos los slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  
  // Muestra solo el slide actual
  slides[slideIndex].classList.add('active');
}

// Enlazar los botones después de que el HTML se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carrusel-prev');
    const nextButton = document.querySelector('.carrusel-next');

    // Se verifica que los botones existan antes de asignarles el evento
    if (prevButton) {
        prevButton.addEventListener('click', () => plusSlides(-1));
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => plusSlides(1));
    }
});