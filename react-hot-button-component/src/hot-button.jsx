import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: this.state.isClicked + 1 });
  }

  render() {
    let button;
    if (this.state.isClicked < 3) {
      button = 'white';
    } else if (this.state.isClicked < 6) {
      button = 'red';
    } else if (this.state.isClicked < 9) {
      button = 'blue';
    } else if (this.state.isClicked < 12) {
      button = 'green';
    } else if (this.state.isClicked < 15) {
      button = 'yellow';
    } else if (this.state.isClicked < 18) {
      button = 'pink';
    } else {
      button = 'pink';
    }
    return (
      <button className={button} onClick={this.handleClick}>
        Hot Button
      </button>
    );

  }
}
