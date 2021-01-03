import refs from './refs';
import galleryItem from '../templates/gallery-item.hbs';

function updateGalleryMarkup(images) {
  const markup = galleryItem(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  refs.button.classList.remove('is-hidden');
}

export default updateGalleryMarkup;
