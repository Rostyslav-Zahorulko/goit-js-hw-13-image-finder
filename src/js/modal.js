import refs from './refs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function showBigImage() {
  refs.list.addEventListener('click', event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }

    const bigImage = event.target.dataset.src;
    const instance = basicLightbox.create(`<img src="${bigImage}">`);

    instance.show();
  });
}

export default showBigImage;
