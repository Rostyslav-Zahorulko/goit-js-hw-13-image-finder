import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { notice, success } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaults.mode = 'dark';

function showNotice() {
  return notice({
    title:
      'По вашему запросу изображений не найдено. Пожалуйста, уточните запрос!',
    delay: 2000,
  });
}

function showSuccessMessage() {
  return success({
    title: 'По вашему запросу найдены изображения. Приятного просмотра!',
    delay: 2000,
  });
}

export { showNotice, showSuccessMessage };
