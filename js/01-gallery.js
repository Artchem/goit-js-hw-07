import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const markupGallery = makeMarkupFromArray(galleryItems);

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
    `<img src ="${event.target.dataset.source}" >`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscapeClick);
      },

      onClose: instance => {
        window.removeEventListener('keydown', onEscapeClick);
      },
    }
  );

  instance.show();

  function onEscapeClick(event) {
    console.log(event.target);
    if (event.code === 'Escape') {
      instance.close();
      // window.removeEventListener('keydown', onEscapeClick);
    }
  }
}
