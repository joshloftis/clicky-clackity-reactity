import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import colors from '../colors.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.colors = colors.map(color => (Object.assign({}, color)));
    this.state = {
      score: 0,
      topscore: 0,
      data: colors,
    };
  }

  handleClick(id) {
    let { score, topscore } = this.state;
    const data = [...this.state.data];
    if (!data[data.findIndex(arr => arr.id === id)].clicked) {
      data[data.findIndex(arr => arr.id === id)].clicked = true;
      score = this.state.score + 1;
      if (score <= topscore) {
        topscore = topscore;
      } else {
        topscore = this.state.topscore + 1;
      }
      this.setState({
        score,
        topscore,
        data,
      });
    } else if (data[data.findIndex(arr => arr.id === id)].clicked) {
      this.setState({
        score: 0,
        topscore,
        data: this.colors,
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          score={this.state.score}
          topScore={this.state.topscore}
        />
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
