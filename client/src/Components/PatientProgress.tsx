import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix icon issue in Leaflet with React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const MapSection = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #f8f9fa;
`;

const ErrorMessage = styled.div`
  padding: 2rem;
  text-align: center;
  color: #6c757d;
  font-size: 1.1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #343a40;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

interface Location {
  name: string;
  latitude: number;
  longitude: number;
}

interface Props {
  locations: Location[];
  title?: string;
}

const PatientProgress: React.FC<Props> = ({ locations, title = "Patient Progress Map" }) => {
  // Handle empty or invalid locations
  if (!locations || locations.length === 0) {
    return (
      <Wrapper>
        <Title>{title}</Title>
        <MapSection>
          <ErrorMessage>
            No locations available to display on the map.
          </ErrorMessage>
        </MapSection>
      </Wrapper>
    );
  }

  // Validate location data
  const validLocations = locations.filter(loc => 
    loc && 
    typeof loc.latitude === 'number' && 
    typeof loc.longitude === 'number' &&
    !isNaN(loc.latitude) && 
    !isNaN(loc.longitude) &&
    loc.latitude >= -90 && 
    loc.latitude <= 90 &&
    loc.longitude >= -180 && 
    loc.longitude <= 180
  );

  if (validLocations.length === 0) {
    return (
      <Wrapper>
        <Title>{title}</Title>
        <MapSection>
          <ErrorMessage>
            No valid location coordinates found.
          </ErrorMessage>
        </MapSection>
      </Wrapper>
    );
  }

  // Calculate center point from all locations
  const centerLat = validLocations.reduce((sum, loc) => sum + loc.latitude, 0) / validLocations.length;
  const centerLng = validLocations.reduce((sum, loc) => sum + loc.longitude, 0) / validLocations.length;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <MapSection>
        <MapContainer 
          center={[centerLat, centerLng]} 
          zoom={13} 
          scrollWheelZoom={false} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {validLocations.map((loc, index) => (
            <Marker key={`${loc.name}-${index}`} position={[loc.latitude, loc.longitude]}>
              <Popup>
                <div style={{ textAlign: 'center', padding: '0.5rem' }}>
                  <strong>{loc.name}</strong>
                  <br />
                  <small>
                    {loc.latitude.toFixed(4)}, {loc.longitude.toFixed(4)}
                  </small>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </MapSection>
    </Wrapper>
  );
};

export default PatientProgress;