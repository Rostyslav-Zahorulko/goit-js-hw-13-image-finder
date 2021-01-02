import refs from './refs';
import galleryItem from '../templates/gallery-item.hbs';

function updateMarkup(images) {
  const markup = galleryItem(images);
  refs.list.insertAdjacentHTML('beforeend', markup);

  refs.button.classList.add('is-visible');
}

export default updateMarkup;
