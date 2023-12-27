import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import "./hotel.css";
import { icon } from "leaflet";

const marker = icon({
  iconUrl: "/marker.png",
  iconSize: [54, 54],
});

function Map({ xpos, ypos }) {
  const position = [xpos, ypos];
  return (
    <MapContainer center={position} zoom={17} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={marker} />
    </MapContainer>
  );
}

export default Map;
