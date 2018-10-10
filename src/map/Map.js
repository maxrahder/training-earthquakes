import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Map.css";

export default class Map extends Component {
  pan(coordinate) {
    const ll = new window.google.maps.LatLng(
      coordinate.latitude,
      coordinate.longitude
    );

    this._map =
      this._map ||
      new window.google.maps.Map(document.getElementById("map"), {
        mapTypeId: window.google.maps.MapTypeId.TERRAIN,
        center: ll,
        zoom: 6
      });

    this._map.panTo(ll);
  }

  render() {
    return <div id="map" />;
  }
  componentDidMount() {
    this.pan({ latitude: 64.9312762, longitude: -19.021169 });
  }
}
