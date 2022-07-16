import React from 'react';

export default class InputValidated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let view;
    let icon;
    let text;
    if (this.state.password.length === 0) {
      view = 'visible';
      icon = 'fa-solid fa-x bad';
      text = 'A password is required.';
    } else if (this.state.password.length < 8 && this.state.password.length > 0) {
      view = 'visible';
      icon = 'fa-solid fa-x bad';
      text = 'Your password is too short.';
    } else {
      view = 'hidden';
      icon = 'fa-solid fa-check good';
    }

    return (
      <form>
        <p>Password</p>
        <label>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <i className={icon}></i></label>
        <p className={view}>{text}</p>
      </form>
    );

  }
}
