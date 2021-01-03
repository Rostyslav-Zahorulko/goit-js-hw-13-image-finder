import './scss/main.scss';
import refs from './js/refs';
import apiService from './js/api-service';
import updateGalleryMarkup from './js/gallery-markup';
import handleOnGalleryClick from './js/modal';

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  refs.gallery.removeEventListener('click', handleOnGalleryClick);

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  refs.gallery.innerHTML = '';
  form.reset();

  apiService.resetPage();
  fetchImages();

  refs.gallery.addEventListener('click', handleOnGalleryClick);
}

refs.button.addEventListener('click', fetchImages);

function fetchImages() {
  refs.button.classList.add('is-hidden');

  apiService.fetchImages().then(images => {
    updateGalleryMarkup(images);
    refs.button.classList.remove('is-hidden');

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    }, 3000);
  });
}
