import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import Country from "./Country";
import ResourceModal from "../Form/ResourceModal";
import Navbar from "../UI/Navbar";
import "leaflet/dist/leaflet.css";
import classes from "./WorldMap.module.css";
import allCountries from "../../data/countries.json";

import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";

const WorldMap = (props) => {
  let countryList = [];
  // check is admin on backend //
  const [isAdmin, setIsAdmin] = useState(false);

  // Set titles for popups over each polygon
  const forEachCountry = (country, layer) => {
    const countryTitle = country.properties.ADMIN;
    countryList.push(countryTitle);

    layer.bindPopup(
      ReactDOMServer.renderToString(<Country name={countryTitle} />)
    );

    // Toggle country to be UNCA color upon a click event //
    layer.on({
      click: (event) => {
        console.log(event.target);
        event.target.setStyle({
          fillColor: "black",
          fillOpacity: 0.5,
        });
      },
    });
  };

  const { BaseLayer } = LayersControl;

  return (
    <MapContainer
      center={[10, 10]}
      style={{ height: "100vh" }}
      zoom={2}
      minZoom={1}
      scrollWheelZoom={true}
    >
     <Navbar /> 
      {<ResourceModal countries={countryList} />}
      <GeoJSON
        style={classes.countryStyling}
        data={allCountries.features}
        onEachFeature={forEachCountry}
      ></GeoJSON>
      <LayersControl>
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>
        <BaseLayer name="NASA Gibs Blue Marble">
          <TileLayer
            url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
            attribution="&copy; NASA Blue Marble, image service by OpenGeo"
            maxNativeZoom={8}
          />
        </BaseLayer>
      </LayersControl>
    </MapContainer>
  );
};

export default WorldMap;
