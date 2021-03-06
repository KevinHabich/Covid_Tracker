import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import Target from "./Target.js";

function Map({ countries, casesType, center, zoom, getCountryData }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {countries.map((country, key) => (
          <Target
            key={key}
            getData={getCountryData}
            countries={countries}
            casesType={casesType}
            country={country}
          />
        ))}
      </LeafletMap>
    </div>
  );
}

export default Map;
