function crearNota(contenido = '') {
  const notaDiv = document.createElement('div');
  notaDiv.classList.add('nota', 'border-2', 'border', 'border-success');
  // Añadir Quill
  const editorDiv = document.createElement('div');
  editorDiv.classList.add('editor');
  notaDiv.appendChild(editorDiv);
  const quill = new Quill(editorDiv, {
    theme: 'snow'
  });
  quill.root.innerHTML = contenido;

//------------------Div para botones con iconos-----------------
  const botonesDiv = document.createElement('div');
  botonesDiv.classList.add('botones');

  const botonGuardar = document.createElement('button');
  const iconoGuardar = document.createElement('g');
  iconoGuardar.classList.add('bi', 'bi-floppy');
  botonGuardar.appendChild(iconoGuardar);
  botonesDiv.appendChild(botonGuardar);
  // Funcion Guardar
  botonGuardar.addEventListener('click', () => {
    const contenidoNota = quill.root.innerHTML;
    quill.disable();
    quill.root.innerHTML = contenidoNota;
    botonGuardar.style.display = 'none';
    botonEditar.style.display = 'inline';
    guardarNotasAutomaticamente();
  });

  const botonEditar = document.createElement('button');
  const iconoEditar = document.createElement('i');
  iconoEditar.classList.add('bi', 'bi-pencil-square');
  botonEditar.appendChild(iconoEditar);
  botonesDiv.appendChild(botonEditar);
  // funcion editar
  botonEditar.addEventListener('click', () => {
    quill.enable(); // mostrar boton editar
    botonGuardar.style.display = 'inline';
    botonEditar.style.display = 'none';
  });

  const botonEliminar = document.createElement('button');
  const iconoEliminar = document.createElement('x');
  iconoEliminar.classList.add('bi', 'bi-trash3');
  botonEliminar.appendChild(iconoEliminar);
  botonesDiv.appendChild(botonEliminar);
  //funcion eliminar
  botonEliminar.addEventListener('click', () => {
    notaDiv.remove();
    guardarNotasAutomaticamente();
  });

  botonEditar.style.display = 'none';   // esconder boton editar
  notaDiv.appendChild(botonesDiv);  //agregar el botonesDiv
//-----------------------Fin div botones ----------------------------

// Agregar todo al contenedor de notas
  document.getElementById('contenedorNotas').appendChild(notaDiv);  
}




