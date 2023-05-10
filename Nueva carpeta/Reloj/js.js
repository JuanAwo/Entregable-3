// Función que actualiza la hora cada segundo
function updateTime() {
    // Obtenemos los elementos del DOM
    const clock = document.getElementById('clock');
  
    // Obtenemos la hora actual
    const now = new Date();
  
    // Formateamos la hora como HH:MM:SS
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Actualizamos el contenido del reloj
    clock.textContent = timeString;
  }
  
  // Llamamos a la función updateTime cada segundo
  setInterval(updateTime, 1000);
  