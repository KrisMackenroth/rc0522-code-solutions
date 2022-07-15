import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else this.setState({ isClicked: false });
  }

  handleTimer() {
    if (this.state.isClicked === true) {
      this.setState({ count: this.state.count + 1 });
    }
  }

  handleReset() {
    if (this.state.isClicked === false) {
      this.setState({ count: 0 });
    }
  }

  start() {
    this.intervalID = setInterval(this.handleTimer, 1000);
  }

  // Function to stop setInterval call
  stop() {
    clearInterval(this.intervalID);
  }

  render() {
    let icon;
    if (this.state.isClicked === true) {
      this.stop();
      this.start();
      icon = 'fa-solid fa-pause';
    } else {
      icon = 'fa-solid fa-play';
    }

    return (
      <React.Fragment>
        <div className='center'>
      <button onClick={this.handleReset} className='circle'>{this.state.count}</button>
        </div>
        <div className='center'><i className={icon} onClick={this.handleClick}></i></div>
      </React.Fragment>
    );

  }
}
