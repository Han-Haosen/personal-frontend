import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
         <Header></Header>
        <Posts></Posts>
      </div>
    );
  }
}

export default App;
