import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const markupGallery = makeMarkupFromArray(galleryItems);
// console.dir(galleryRef);
galleryRef.insertAdjacentHTML('beforeend', markupGallery);

galleryRef.addEventListener('click', onGalleryClick);
// window.addEventListener('keydown', onClick);

// function onEscapeClick(event) {
//   //   console.log(event);
//   if (event.code === 'Escape') {
//     console.log(event);
//     // closeModal();
//   }
// }

function openModal(option) {
  const instance = basicLightbox.create(`<img src ="${option}" >`);

  instance.show();

  window.addEventListener('keydown', onEscapeClick);

  function onEscapeClick(event) {
    //   console.log(event);
    if (event.code === 'Escape') {
      //   console.log(event);

      instance.close();
      window.removeEventListener('keydown', onEscapeClick);
    }
  }
}

function onGalleryClick(event) {
  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains('gallery__image');
  if (!isGalleryImageEl) {
    return;
  }

  console.log(event.target.dataset.source);

  openModal(event.target.dataset.source);
}

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
