import image from './assets/image.jpg';
import {Block} from './classes/blocks';

export const model = [
  new Block('title', 'Конструктор сайт на чистом JavaScript', {
    tag: 'h2',
    styles: {
      color: 'orange',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new Block('text', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit', {
    styles: {
      'font-size': '18px',
    }
  }),
  new Block('columns', ['111', '222', '333', '444'], {
    styles: {
      background: '#f9f9f9',
      padding: '2rem',
    }
  }),
  new Block('image', image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
      'max-width': '100%',
      height: 'auto'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Картинка'
  })
];
