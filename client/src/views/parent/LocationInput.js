import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import FormInput from "../../components/layout/FormInput";

const colomboDistrictBounds = {
  south: 6.9271,
  west: 79.9414,
  north: 7.117,
  east: 80.0953,
};

const GOOGLE_MAPS_API_KEY = "AIzaSyAeTBd0rn-R-OfRQO5pjSR54cRxcuOAD6s"; // Replace with your actual API key

function LocationInput({ value, onChange }) {
  const [selectedLatLng, setSelectedLatLng] = useState(null);

  const handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setSelectedLatLng(latLng);
      onChange({ address, latLng });
    } catch (error) {
      console.error("Error geocoding address:", error);
    }
  };

  return (
    <div>
      <PlacesAutocomplete
        value={value}
        onChange={onChange}
        onSelect={handleSelect}
        searchOptions={{
          apiKey: GOOGLE_MAPS_API_KEY,
          bounds: colomboDistrictBounds,
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <FormInput
              {...getInputProps({
                label: "Pickup Location",
                placeholder: "Enter Pickup Address",
                className: "form-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      key: index,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      {selectedLatLng && (
        <div className="map-container">
          <MapComponent latLng={selectedLatLng} />
        </div>
      )}
    </div>
  );
}

function MapComponent({ latLng }) {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        center={latLng}
        zoom={15}
        options={{
          disableDefaultUI: true, // Customize map controls as needed
        }}
      >
        <Marker position={latLng} />
      </GoogleMap>
    </LoadScript>
  );
}

export default LocationInput;
