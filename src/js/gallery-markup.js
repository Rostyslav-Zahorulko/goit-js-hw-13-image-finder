import refs from './refs';
import galleryItem from '../templates/gallery-item.hbs';

function updateGalleryMarkup(images) {
  const markup = galleryItem(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateGalleryMarkup;
