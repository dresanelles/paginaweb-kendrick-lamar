const topCanciones = document.getElementById('top-canciones');
if (topCanciones) {
    topCanciones.addEventListener('click', () => {
        window.location.href = "index2.html";
    });
}


const paginaInicio = document.getElementById('inicio-pagina');
if (paginaInicio) {
    paginaInicio.addEventListener('click', () => {
        window.location.href = "index.html";
    });
}