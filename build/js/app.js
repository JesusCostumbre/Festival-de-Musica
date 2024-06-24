document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')
    const numImagenes =16;

    for(let i = 1; i <= numImagenes; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galeria'
        
        galeria.appendChild(imagen)
    }
}