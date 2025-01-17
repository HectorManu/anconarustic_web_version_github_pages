document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('galleryContainer');
    const imageCount = 56; // Número total de imágenes
    const excludeList = [29,55, 52, 49, 47, 48, 44,45, 38, 17,29,53]; // Lista de imágenes para excluir

    for (let i = 1; i <= imageCount; i++) {
        // Verificar si el índice actual debe ser excluido
        if (excludeList.includes(i)) {
            continue; // Saltar al siguiente ciclo del bucle si i está en excludeList
        }

        let imgPath = `img/img${i}.webp`; // Asumiendo un patrón de nomenclatura consistente
        let boxDiv = document.createElement('div');
        boxDiv.className = 'box gallery__img';
        let imgElement = document.createElement('img');
        imgElement.src = imgPath;
        imgElement.alt = `Mueble ${i}`;
        boxDiv.appendChild(imgElement);
        galleryContainer.appendChild(boxDiv);
    }



    // Código para la funcionalidad del modal aquí
    let modal = document.querySelector('#modal');
    let img = document.querySelector('#modal__img');
    let boton = document.querySelector('#modal__boton');

    document.querySelector('.container').addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'IMG') {
            modal.classList.toggle("modal--open");
            let src = e.target.src;
            img.setAttribute("src", src);
        }
    });

    boton.addEventListener('click', function() {
        modal.classList.toggle("modal--open");
    });
});
