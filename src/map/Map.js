import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Map.css";
import Earthquakes from "../service/Earthquakes";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.location = { latitude: 48.8583701, longitude: 2.2944813 };

    this.state = {
      earthquakes: []
    };
    Earthquakes.get().then(this.drawMarkers.bind(this));
  }

  // Get the map instance, optionally centered at the specified location.
  pan(location) {
    this.location = location || this.location;
    const ll = new window.google.maps.LatLng(
      location.latitude,
      location.longitude
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

  // @private
  // This array holds the markers. This is needed when adding
  // new markers are created, in order to destroy the old ones.
  get markers() {
    return this._markers || [];
  }
  set markers(markers) {
    this._markers = markers;
  }

  // @private
  drawMarkers(earthquakes) {
    // Assert: the map has already been created

    // Destroy the current set of markers.
    this.markers.forEach(marker => {
      marker.setMap(null);
    });

    this.markers = [];

    // For each record, create and show a new marker, and push onto the array.
    earthquakes.forEach(item => {
      let ll = new window.google.maps.LatLng(item.latitude, item.longitude);
      let marker = new window.google.maps.Marker({
        position: ll,
        icon: this.getMarker("red"),
        item: item
      });
      this.markers.push(marker);
      marker.setMap(this._map);
    });

    function attachListener(marker, record) {
      window.google.maps.event.addListener(marker, "click", function() {
        this.onSelected(record);
      });
    }
  }

  onSelected(item) {}

  getMarker(color) {
    return {
      path: window.google.maps.SymbolPath.CIRCLE,
      scale: 10,
      strokeColor: "black",
      strokeWeight: 3,
      fillColor: color,
      fillOpacity: 1.0
    };
  }

  render() {
    return <div id="map" />;
  }
  componentDidMount() {
    this.pan({ latitude: 64.9312762, longitude: -19.021169 });
  }
}
