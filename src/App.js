import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Map from "./map/Map";
import Grid from "./grid/Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <Grid />
      </div>
    );
  }
}

export default App;
