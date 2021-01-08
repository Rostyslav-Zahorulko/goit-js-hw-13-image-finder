import './scss/main.scss';
import refs from './js/refs';
import apiService from './js/api-service';
import updateGalleryMarkup from './js/gallery-markup';
import handleOnGalleryClick from './js/modal';
import { showNotice, showSuccess } from './js/notifications';
import scroll from './js/scroll';

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  refs.gallery.innerHTML = '';
  refs.gallery.removeEventListener('click', handleOnGalleryClick);

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  apiService.resetPage();
  fetchImages();

  refs.gallery.addEventListener('click', handleOnGalleryClick);
  form.reset();
}

refs.button.addEventListener('click', fetchImages);

function fetchImages() {
  refs.button.classList.add('is-hidden');

  apiService
    .fetchImages()
    .then(images => {
      if (images.length === 0) {
        showNotice();

        return;
      }

      showSuccess();
      updateGalleryMarkup(images);
      refs.button.classList.remove('is-hidden');
      scroll();
    })
    .catch(console.log);
}
