import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);
const galleryMarkup = createGalleryCards(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', (onImgClick));

function createGalleryCards(galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('')
    return markup;
}

function onImgClick (evt) {
    evt.preventDefault();
    if(!evt.target.classList.contains('gallery__image')) {
      return;
    }
    
    onModalOpen(evt.target.dataset.source);
}
let instance;
function onModalOpen (source) {
  instance = basicLightbox.create(`
  <img src=${source} style="height: 100vh; display:block">
`,

{
  onShow: instance => {
    addListenerOnEsc();
  },
  onClose: instance => {
    removeListenerOnEsc();
  },
},
  );
instance.show();
}

function addListenerOnEsc() {
  window.addEventListener('keydown', (onEscClick));
}

function onEscClick (event) {
  if (event.code === 'Escape') {
    instance.close();
  } 
}

function removeListenerOnEsc() {
  window.removeEventListener('keydown', onEscClick)
}
