import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import colors from '../colors.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topscore: 0,
      data: colors,
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header score={this.state.score} topScore={this.state.topscore} />
        <Body data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
