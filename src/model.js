import image from './assets/image.jpg';

export const model = [
  { type: 'title', value: 'Hello, World!', options: {
    tag: 'h2',
    styles: `color: orange`
  }},
  { type: 'text', value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit' },
  { type: 'columns', value: ['111', '222', '333', '444'] },
  { type: 'image', value: image}
];
