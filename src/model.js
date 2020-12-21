import image from './assets/image.jpg';

export const model = [
  { type: 'title', value: 'Конструктор сайт на чистом JavaScript', options: {
    tag: 'h2',
    styles: {
      color: 'orange',
      padding: '1.5rem',
      'text-align': 'center'
    }}},
  { type: 'text', value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit', options: {
    styles: {
      'font-size': '18px',
    }}},
  { type: 'columns', value: ['111', '222', '333', '444'], options: {
    styles: {
      background: '#f9f9f9',
      padding: '2rem',
    }}},
  { type: 'image', value: image, options: {
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
  }}
];
