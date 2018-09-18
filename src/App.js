import React, { Component } from 'react';

import './App.css';
import Map from './Components/map';
import Deck from './Components/deckgl';
import Bubble from './Components/cluster'
import Bar from './Components/floatingbuttons'







class App extends Component {
  render() {
    return (
      <div className="App">

      <Bar></Bar>
      </div>
    );
  }
}

export default App;
