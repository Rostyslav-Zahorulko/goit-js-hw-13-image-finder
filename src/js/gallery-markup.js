import refs from './refs';
import galleryItem from '../templates/gallery-item.hbs';

function updateGalleryMarkup(images) {
  const markup = galleryItem(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  refs.button.classList.add('is-visible');
}

export default updateGalleryMarkup;
