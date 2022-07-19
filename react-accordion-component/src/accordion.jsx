import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeIndex: null
    };
  }

  handleClick(index) {
    if (this.state.activeIndex === index) {
      this.setState({ activeIndex: null });
    } else {
      this.setState({ activeIndex: index });
    }
  }

  render() {
    const listItems = this.props.topics.map((topic, index) => (
      <div key={topic.name}>
        <div className={this.state.activeIndex === index ? 'open' : 'closed'} onClick={() => this.handleClick(index)}>{topic.name}</div>
        <div className={this.state.activeIndex === index ? 'visible' : 'hidden'}>{topic.description}</div>
      </div>
    ));
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}
