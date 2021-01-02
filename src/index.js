import './scss/main.scss';
import refs from './js/refs';
import apiService from './js/api-service';
import updateMarkup from './js/update-markup';
import showBigImage from './js/modal';

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  refs.list.innerHTML = '';
  form.reset();

  apiService.resetPage();

  apiService.fetchImages().then(images => updateMarkup(images));

  showBigImage();
}

refs.button.addEventListener('click', handleButtonClick);

function handleButtonClick() {
  apiService.fetchImages().then(images => updateMarkup(images));
}
