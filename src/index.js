import './styles.css';
import refs from './js/refs';
import apiService from './js/api-service';
import updateMarkup from './js/update-markup';

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  refs.list.innerHTML = '';
  form.reset();

  apiService.resetPage();

  apiService.fetchPhotos().then(photos => updateMarkup(photos));
}

refs.button.addEventListener('click', handleButtonClick);

function handleButtonClick() {
  apiService.fetchPhotos().then(photos => updateMarkup(photos));
}
