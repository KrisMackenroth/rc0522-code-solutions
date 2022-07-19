import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const topics = [
  { description: 'jdfksadflksajdfjdfksadflksajdfjdfksadflksajdf', name: 'Bulbasaur' },
  { description: 'jdfksadflksajdfjdfksadflksajdfjdfksadflksajdf', name: 'Charmander' },
  { description: 'jdfksadflksajdfjdfksadflksajdfjdfksadflksajdf', name: 'Squirtle' },
  { description: 'jdfksadflksajdfjdfksadflksajdfjdfksadflksajdf', name: 'Pikachu' },
  { description: 'jdfksadflksajdfjdfksadflksajdfjdfksadflksajdf', name: 'Jigglypuff' }
];

root.render(<Accordion topics={topics} />);
