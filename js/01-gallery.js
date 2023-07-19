import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

function makeMarkupFromArray(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
    </li>
    `;
    })
    .join('');
}

const galleryRef = document.querySelector('.gallery');
const markupGallery = makeMarkupFromArray(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', markupGallery);

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains('gallery__image');
  if (!isGalleryImageEl) {
    return;
  }

  console.log(event.target.dataset.source);

  openCloseModal(event.target.dataset.source);
}

function openCloseModal(option) {
  const instance = basicLightbox.create(
    `<img src ="${event.target.dataset.source}" >`
  );

  instance.show();

  window.addEventListener('keydown', onEscapeClick);

  function onEscapeClick(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscapeClick);
    }
  }
}
