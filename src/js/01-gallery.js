// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryCreate = galleryItems
  .map(
    item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</li>`
  )
  .join('');

galleryList.innerHTML += galleryCreate;

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: `alt`,
});

console.log(galleryItems);
