var colores = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];

function cambiarColor() {
    var indice = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[indice];
  }

  
