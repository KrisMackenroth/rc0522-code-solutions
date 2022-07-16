import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    if (event.target.className === 'closed') {
      event.target.className = 'open';
    } else {
      event.target.className = 'closed';
    }
  }

  render() {
    const listItems = topics.map(topic => <li className='closed' onClick={this.handleClick} key={topic.name}>{topic.name}</li>);

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

const topics = [
  { description: 'jdfksadflksajdf', name: 'Bulbasaur' },
  { description: 'jdfksadflksajdf', name: 'Charmander' },
  { description: 'jdfksadflksajdf', name: 'Squirtle' },
  { description: 'jdfksadflksajdf', name: 'Pikachu' },
  { description: 'jdfksadflksajdf', name: 'Jigglypuff' }
];
