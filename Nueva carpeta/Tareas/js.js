    const listaTareas = document.getElementById("lista-tareas");
    const formulario = document.querySelector("form");
    const campoTexto = document.getElementById("nueva-tarea");

      formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const nuevaTarea = document.createElement("li");
        const contenidoTarea = document.createElement("span");
        contenidoTarea.textContent = campoTexto.value;
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        nuevaTarea.appendChild(contenidoTarea);
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        campoTexto.value = "";
      });

      listaTareas.addEventListener("click", (evento) => {
        if (evento.target.tagName === "BUTTON") {
          evento.target.parentNode.remove();
        }
      });