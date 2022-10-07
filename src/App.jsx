import { useState } from "react";
import reactLogo from "./assets/ivanlopez.png";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h1 className="text-3xl">Tokyo Based Web Creative</h1>
      </div>
    );
  }
}

export default App;
