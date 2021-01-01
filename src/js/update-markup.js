import refs from './refs';
import card from '../templates/card.hbs';

function updateMarkup(photos) {
  const markup = card(photos);
  refs.list.insertAdjacentHTML('beforeend', markup);

  refs.button.classList.add('is-visible');
}

export default updateMarkup;
