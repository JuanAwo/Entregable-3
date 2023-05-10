// Función que muestra la imagen ampliada
function showImage(src) {
    // Obtenemos los elementos del DOM
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
  
    // Cambiamos la imagen del lightbox
    lightboxImage.src = src;
  
    // Mostramos el lightbox
    lightbox.style.display = 'block';
  }
  
  // Función que cierra la imagen ampliada
  function closeImage() {
    // Obtenemos el elemento del DOM
    const lightbox = document.getElementById('lightbox');
  
    // Ocultamos el lightbox
    lightbox.style.display = 'none';
  }
  