import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './MapView.css';

interface MapViewProps {
  id: string;
}

export default function MapView({ id }: MapViewProps) {
  return (
    <MapContainer id={id} center={[-9.9256, -63.0714]} zoom={5} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable. <br /> It's true
        </Popup>
      </Marker>
    </MapContainer>
  )
}
