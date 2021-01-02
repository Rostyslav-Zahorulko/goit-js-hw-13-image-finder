import refs from './refs';
import card from '../templates/card.hbs';

function updateMarkup(images) {
  const markup = card(images);
  refs.list.insertAdjacentHTML('beforeend', markup);

  refs.button.classList.add('is-visible');
}

export default updateMarkup;
