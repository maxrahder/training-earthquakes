import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Earthquakes from "./service/Earthquakes";
import Map from "./map/Map";
import Grid from "./grid/Grid";

class App extends Component {
  constructor(props) {
    super(props);
    this.childMap = React.createRef();
    this.childGrid = React.createRef();
    this.state = {};
    Earthquakes.get().then(earthquakes => {
      this.childMap.current.drawMarkers(earthquakes);
      this.childGrid.current.update(earthquakes);
    });
  }

  render() {
    return (
      <div className="App">
        <Map ref={this.childMap} />
        <Grid ref={this.childGrid} />
      </div>
    );
  }
}

export default App;
