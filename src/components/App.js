import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import colors from '../colors.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      score: 0,
      topscore: 0,
      data: colors,
    };
  }

  handleClick(id) {
    console.log(id);
    const data = [...this.state.data];
    data[data.findIndex(arr => arr.id === id)].clicked = true;
    this.setState({
      data,
    });
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
