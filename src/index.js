import './styles.css';
import refs from './js/refs';
import card from './templates/card.hbs';

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.query.value;

  let counter = 1;

  fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${counter}&per_page=12&key=19734316-10978fed4d6ca650a445cb4b9`,
  )
    .then(response => response.json())
    .then(data => {
      console.log(data.hits);

      refs.list.innerHTML = '';

      const markup = card(data.hits);
      refs.list.insertAdjacentHTML('beforeend', markup);

      refs.button.classList.add('is-visible');
    })
    .catch(error => console.log(error));

  //   refs.button.addEventListener('click', handleOnLoadMoreButtonClick);

  //   function handleOnLoadMoreButtonClick(event) {
  //     counter += 1;

  //     console.log(counter);

  //     fetch(
  //       `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${counter}&per_page=12&key=19734316-10978fed4d6ca650a445cb4b9`,
  //     )
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data.hits);

  //         refs.list.innerHTML = '';

  //         const markup = card(data.hits);
  //         refs.list.insertAdjacentHTML('beforeend', markup);

  //         refs.button.classList.add('is-visible');
  //       })
  //       .catch(error => console.log(error));
  //   }
}
