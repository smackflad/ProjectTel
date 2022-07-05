import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { update } from "../../../../../../../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetSearchMutation } from "../../../../../../../store/api/searchApi"
import { QueryStatus } from "@reduxjs/toolkit/query/react";

const containerStyle = {
  width: '100%',
  height: '250px'
};
function FilterMap(lat) {
  const searchState = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [getSearch, { data, status, isLoading, isError, error }] =
  useGetSearchMutation();

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      console.log(searchState);
    } else if (isError) {
      let errToastMessage = "";
      if (error.status === 401) {
        console.log(`Δώσατε λάθος στοιχεία`)
      } else if (error.status === 400) {
        console.log(`ERROR: 400 BAD REQUEST`)
      } else if (error.status === 500) {
        console.log(`ERROR: 500 INTERNAL SERVER ERROR`)
      }
    }
  }, [status, error, isError]);



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
  useEffect(() => {
    if(position){
      dispatch(
        update((state) => {
          state.long = position.lng;
          state.lat = position.lat;
        })
      )
      console.log({...searchState, long: position.lng, lat: position.lat});
      // getSearch({...searchState, long: position.lng, lat: position.lat})
    }
  }, [position]);

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
