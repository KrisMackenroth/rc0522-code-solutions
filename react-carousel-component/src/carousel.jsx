import React from 'react';

const topics = [
  { name: 'https://www.superherohype.com/assets/uploads/2013/12/file_180743_0_spiderman2trailer.jpg' },
  { name: 'data:image/jpeg;base64,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' },
  { name: 'https://sportshub.cbsistatic.com/i/2021/08/09/6e3315ce-cb47-42da-9b0a-41ef335f000e/dragon-ball-super-new-super-hero-movie-goku-toei-animation-1276890.jpg' },
  { name: 'https://static.wikia.nocookie.net/deathbattle/images/f/f4/Portrait.vegeta.png/revision/latest?cb=20210808085749' },
  { name: 'https://preview.redd.it/eyz46ujthha81.jpg?width=640&crop=smart&auto=webp&s=45b1a952a5cedd3714a11c93aec6d5003da85958' }
];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      count: 0,
      images: topics.length
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.clicky = this.clicky.bind(this);
    this.start = this.start.bind(this);
  }

  clicky(event) {
    clearInterval(this.intervalID);
    const parse = parseInt(event.target.value);
    for (let x = 0; x < event.target.offsetParent.children[0].children[1].children[0].children.length; x++) {
      event.target.offsetParent.children[0].children[1].children[0].children[x].className = 'background-white';
    }
    event.target.className = 'background-black';
    this.setState({ count: parse });
    this.intervalID = setInterval(this.handleTimer, 3000);

  }

  handleClick(event) {
    if (event.target.className === 'forward') {
      clearInterval(this.intervalID);
      this.setState({ count: this.state.count + 1 });
      this.intervalID = setInterval(this.handleTimer, 3000);
    } else {
      const end = this.state.images - 1;
      if (this.state.count === 0) {
        this.setState({ count: end });
      } else {
        clearInterval(this.intervalID);
        this.setState({ count: this.state.count - 1 });
        this.intervalID = setInterval(this.handleTimer, 3000);
      }
    }
  }

  handleTimer() {
    this.setState({ count: this.state.count + 1 });
  }

  handleReset() {
    if (this.state.count === this.state.images) {
      this.setState({ count: 0 });
    }
  }

  start() {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.handleTimer, 3000);
  }

  render() {
    const listItems = topics.map((topic, index) => <div key={topic.name}><img value={index} onLoad={this.start} key={topic.name} src={topic.name}></img></div>);
    const buttons = topics.map((topic, index) => <button className='test' onClick={this.clicky} value={index} key={topic.name}></button>);
    if (this.state.count === this.state.images) {
      this.setState({ count: 0 });
    }
    for (let x = 0; x < buttons.length; x++) {
      if (this.state.count === buttons[x].props.value) {
        buttons[x].props.className = 'background-black';
      } else {
        buttons[x].props.className = 'background-white';
      }
    }
    return (
      <React.Fragment>
      <div className="row">
      <div className="column-one-third">
        <a onClick={this.handleClick} href="#" className="backward">&lsaquo;</a>
      </div>
    <div className='column-one-third'>
      { listItems[this.state.count] }
      </div>
      <div className="column-one-third">
          <a onClick={this.handleClick} href="#" className="forward">&rsaquo;</a>
      </div>
      </div>
      <div className="row">
      <div className="column-full buttons">
      {buttons}
      </div>
    </div>
      </React.Fragment>
    );
  }
}
