import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Grid.css";
import Earthquakes from "../service/Earthquakes";

import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.location = { latitude: 48.8583701, longitude: 2.2944813 };

    this.state = {
      earthquakes: []
    };
    // Earthquakes.get().then(earthquakes => {
    //     this.setState({ earthquakes, pageSize: earthquakes.length });
    //   console.log(earthquakes.length);
    // });
  }

  update(earthquakes) {
    this.setState({ earthquakes });
  }

  render() {
    return (
      <ReactTable
        data={this.state.earthquakes}
        defaultPageSize={this.state.pageSize}
        showPaginationBottom={false}
        columns={[
          {
            Header: "Time",
            headerStyle: {
              textAlign: "left"
            },
            style: { textAlign: "left" },
            id: 1,
            accessor: d =>
              `${d.timestamp.getHours()}:${
                d.timestamp.getMinutes().toString().length === 1 ? "0" : ""
              }${d.timestamp.getMinutes()} ${d.timestamp.toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                }
              )}`
          },
          {
            Header: "Where (V = west, A = east)",
            headerStyle: {
              textAlign: "left"
            },
            style: { textAlign: "left" },
            accessor: "humanReadableLocation"
          },
          {
            Header: "Magnitude",
            accessor: "size"
          }
        ]}
        className="-striped -highlight"
      />
    );
  }
}
