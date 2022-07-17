import React from 'react';

const topics = [
  { description: 'jdfksadflksajdfjdfksadflksajdfjdfksadflksajdf', name: 'Bulbasaur' },
  { description: 'jdfksadflksajdfjdfksadflksajdfjdfksadflksajdf', name: 'Charmander' },
  { description: 'jdfksadflksajdfjdfksadflksajdfjdfksadflksajdf', name: 'Squirtle' },
  { description: 'jdfksadflksajdfjdfksadflksajdfjdfksadflksajdf', name: 'Pikachu' },
  { description: 'jdfksadflksajdfjdfksadflksajdfjdfksadflksajdf', name: 'Jigglypuff' }
];

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 'false' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.className === 'closed') {
      for (let x = 0; x < event.target.parentElement.parentElement.children.length; x++) {
        event.target.parentElement.parentElement.children[x].children[0].className = 'closed';
        event.target.parentElement.parentElement.children[x].children[1].className = 'hidden';
        event.target.className = 'open';
        event.target.nextElementSibling.className = 'visible';
      }
    } else {
      event.target.className = 'closed';
      event.target.nextElementSibling.className = 'hidden';
    }
  }

  render() {
    const listItems = topics.map(topic => <div key={topic.name}><li className='closed' onClick={this.handleClick} key={topic.name}>{topic.name}</li><li className='hidden'>{topic.description}</li></div>);
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}
