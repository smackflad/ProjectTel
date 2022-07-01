import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";

const containerStyle = {
  width: '100%',
  height: '250px'
};
function FilterMap(lat) {
  var center = lat;
  
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  if(isGeolocationAvailable && isGeolocationEnabled){
    //TODO cant get geolocation coords from browser
    center = coords;
  }
  const [position, setPosition] = useState(center);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBT2if7zGVEamPsOO5I02MFM3COSVegWCY"
  })

  const [map, setMap] = React.useState(null)

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  const [mapref, setMapRef] = React.useState(null);
  const handleCenterChanged = () => {
    if (mapref) {
      const newCenter = mapref.getCenter();
      setPosition({lat: newCenter.lat(), lng: newCenter.lng()})
    }
  };

  const handleOnLoad = map => {
    setMapRef(map);
  };

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onCenterChanged={handleCenterChanged}
        zoom={13}
        onLoad={handleOnLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={position}
        />
      </GoogleMap>
  ) : <></>
};

export default React.memo(FilterMap)
