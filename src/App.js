import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (

      <div>
        <Header />
        <Main />
      </div>
        // <div className="container">
        //   <h1>MERN-Stack To Do App </h1>
        // </div>
    );
  }
}

export default App;
