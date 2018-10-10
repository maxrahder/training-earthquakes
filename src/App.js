import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Map from "./map/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
