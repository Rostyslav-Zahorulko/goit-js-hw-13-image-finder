import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { notice, success } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaults.mode = 'dark';

function showNotice() {
  return notice({
    title:
      'По вашему запросу изображений не найдено. Пожалуйста, уточните запрос!',
    hide: true,
    delay: 2000,
  });
}

function showSuccess() {
  return success({
    title: 'По вашему запросу найдены изображения. Приятного просмотра!',
    hide: true,
    delay: 2000,
  });
}

export { showNotice, showSuccess };
