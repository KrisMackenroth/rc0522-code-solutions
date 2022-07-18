import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  render() {
    let status;
    let icon;
    let background;
    if (this.state.isClicked === true) {
      status = 'modal gone';
      icon = 'hidden';
      background = 'grey';
    } else {
      status = 'modal';
      icon = 'fa-solid fa-bars';
    }
    return (
      <React.Fragment>
        <div className={status}>
          <h1 onClick={this.handleClick}>Menu</h1>
          <p onClick={this.handleClick}>About</p>
          <p onClick={this.handleClick}>Get Started</p>
          <p onClick={this.handleClick}>Sign In</p>
        </div>
      <div className={background} onClick={this.handleClick}><i className={icon} onClick={this.handleClick}></i>
          </div>
      </React.Fragment>
    );

  }
}
