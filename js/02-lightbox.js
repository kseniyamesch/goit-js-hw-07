import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);
const galleryMarkup = createGalleryCards(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

// galleryRef.addEventListener('click', (onImgClick));

function createGalleryCards(galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join('')
    return markup;
}
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });