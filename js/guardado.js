
let temporizadorGuardado; // contador para guardar
function guardarNotasAutomaticamente() {
  const notas = [];
  const notasDivs = document.querySelectorAll('.nota .editor');

  notasDivs.forEach((editorDiv, index) => {
    const quillInstance = Quill.find(editorDiv);
    if (quillInstance) {
      notas.push({
        id: index + 1,
        contenido: quillInstance.root.innerHTML
      });
    }
  });
  localStorage.setItem('memory.JSON', JSON.stringify(notas));   // guardar en memory.JSON
  console.log("Notas guardadas en localStorage como memory.JSON", notas);
}
// cargar al iniciar
function cargarNotas() {
  const notasGuardadas = JSON.parse(localStorage.getItem('memory.JSON')) || [];
  notasGuardadas.forEach(nota => {
    crearNota(nota.contenido); // mastrar nota con su contenido guardado
  });
}
// los clicks inician el temporalizador de 2seg
function manejarClick() {
  clearTimeout(temporizadorGuardado);
  temporizadorGuardado = setTimeout(guardarNotasAutomaticamente, 2000);
}
document.addEventListener('DOMContentLoaded', () => {
  cargarNotas();
  document.addEventListener('click', manejarClick);
  document.getElementById('crearNotaBtn').addEventListener('click', () => crearNota());
});
