import React from 'react';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else this.setState({ isClicked: false });
  }

  render() {
    let button;
    let position;
    let type;
    if (this.state.isClicked === false) {
      button = 'off';
      position = 'left';
      type = 'Off';
    } else {
      button = 'on';
      position = 'right';
      type = 'On';
    }
    return (
      <React.Fragment>
      <button className={button} onClick={this.handleClick}>
        <div className={position}></div>
      </button>
      <p className='type'>{type}</p>
      </React.Fragment>
    );

  }
}
