var iconoMenu = document.querySelector(".icono_menu_desplegable");

function desplegarMenu(){
    var menuDesplegable = document.querySelector(".contenedor_paginas");
    menuDesplegable.classList.toggle("desplegar_menu");

    /*---------- ANIMACION DEL ICONO DEL MENU  ----------*/
    var lineaUno = document.querySelector(".desplegable_linea_uno");
    var lineaDos = document.querySelector(".desplegable_linea_dos");
    var lineaTres = document.querySelector(".desplegable_linea_tres");

    lineaUno.classList.toggle("rotar_linea_uno");
    lineaDos.classList.toggle("eliminar_linea_dos");
    lineaTres.classList.toggle("rotar_linea_tres");
}

iconoMenu.addEventListener("click", desplegarMenu);

/*--Submenu--*/

//const experiencia = document.getElementById('experiencia-menu');
/*const subMenu = document.getElementById('experiencia-submenu');

experiencia.addEventListener('click', () => {
  subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
});


const experienciaMenu = document.getElementById('experiencia-menu');
const experienciaSubmenu = document.getElementById('experiencia-submenu');

experienciaMenu.addEventListener('click', () => {
  experienciaSubmenu.classList.toggle('show');
});*/
