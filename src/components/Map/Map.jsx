import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import Listing from '../../pages/Listing'
import GeoCoderMarker from '../GeoCoderMarker/GeoCoderMarker'

//const address = Listing.address;
const Map = ({ address }) => {
  const [street, city, country] = address.split(',').map(part => part.trim());
  return (
    <MapContainer 
      center={[23.8, 77.8]}
      zoom={10}
      scrollWheelZoom={false}
      style={{
        height: "40vh",
        width: "100%",
        marginTop: "20px",
        zIndex: 0,
       
      }}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <GeoCoderMarker address={`${street}, ${city}, ${country}`} />
    </MapContainer>
  );
};

export default Map;