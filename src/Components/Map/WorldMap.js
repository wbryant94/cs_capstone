import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import classes from './WorldMap.module.css'; 
import allCountries from "../../data/countries.json";

import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

const WorldMap = (props) => {

    const forEachCountry = (country, layer) => {
        const countryTitle = country.properties.ADMIN;
        layer.bindPopup(countryTitle);
      
        // Toggle country to be UNCA color //
        layer.on({
          click: (event) => {
            event.target.setStyle({
              fillColor: "#007bff",
              fillOpacity: 0.3,
            });
          },
        });
      };


  return (
    <MapContainer 
    center={[10, 10]} 
    style={{height: "100vh"}}
    zoom={2} 
    scrollWheelZoom={false} 
    >

    <GeoJSON
          style={classes.countryStyling}
          data={allCountries.features}
          onEachFeature={forEachCountry}
        ></GeoJSON>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default WorldMap;
