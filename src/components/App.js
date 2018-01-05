import React from 'react';
import Header from './Header';
import Instructions from './Instructions';
import Body from './Body';
import Footer from './Footer';
import colors from '../colors.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
    this.colors = colors.map(color => (Object.assign({}, color, { clicked: false })));
    this.state = {
      score: 0,
      topscore: 0,
      data: colors,
    };
  }

  handleCorrect(data) {
    let { score, topscore } = this.state;
    score = this.state.score + 1;
    (score <= topscore) ? topscore : topscore = this.state.topscore + 1;
    this.setState({
      score,
      topscore,
      data,
    });
  }

  handleIncorrect() {
    this.colors = colors.map(color => (Object.assign({}, color, { clicked: false })));
    let { score, topscore, data } = this.state;
    this.setState({
      score: 0,
      topscore,
      data: this.colors,
    });
  }

  handleClick(id) {
    const data = [...this.state.data];
    if (!data[data.findIndex(arr => arr.id === id)].clicked) {
      data[data.findIndex(arr => arr.id === id)].clicked = true;
      this.handleCorrect(data);
    } else {
      this.handleIncorrect();
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          score={this.state.score}
          topScore={this.state.topscore}
        />
        <Instructions />
        <Body
          data={this.state.data}
          handleClick={this.handleClick}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
