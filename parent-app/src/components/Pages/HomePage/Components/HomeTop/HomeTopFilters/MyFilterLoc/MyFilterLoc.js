import './MyFilterLoc.css';
import '../MyFilter.css';
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {  } from "@googlemaps/js-api-loader";

const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
};

const Marker = (options) => {
    const [marker, setMarker] = useState();
    
    useEffect(() => {
        if (!marker) {
        setMarker(new window.google.maps.Marker());
        }
    
        // remove marker from map on unmount
        return () => {
        if (marker) {
            marker.setMap(null);
        }
        };
    }, [marker]);
    useEffect(() => {
        if (marker) {
        marker.setOptions(options);
        }
    }, [marker, options]);
    return null;
};

function Map({
        center,
        zoom,
    }) {
    const ref = useRef();
    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center,
                zoom,
            }));
        }
    });

    return <div style={{width: '100%', height: '250px'}} ref={ref} id="map" className='' />;
  }

const MyFilterLoc = ({}) =>
{
	const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState([]);
    
    const center = { lat: 37.990832, lng: 23.70332 };
    const position = { lat: -25.363882, lng: 131.044922 };
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(
        (pos)=>{
            var crd = pos.coords;

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
            center = { lat: crd.latitude, lng: crd.longitude };
        },
        (err)=>{
            console.warn(`ERROR(${err.code}): ${err.message}`);
        },
        {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: Infinity
        });

    }else{
    }
    const zoom = 13;

    const ref = useRef(null);
    const onClickOutside = ()=>{
        if(open){setOpen(!open)};
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, [ onClickOutside ]);

    return (
        <div ref={ref} className='MyFilter-txt-outter'>
        <div className="MyFilter-txt-external MyFilterLoc-txt-external">
            <div onClick={()=>{setOpen(!open)}} className='MyFilter-txt-internal MyFilterLoc-txt-internal'>
                <div className={`MyFilter-txt-internal-spans`}>
                    <span className={`MyFilter-txt-span ${checked.length ? "MyFilter-txt-span-small":""}`}>Τοποθεσία</span>
                    {checked.length >0 &&
                            <span className='MyFilter-txt-span-items'></span>
                    }
                </div>
                <span className="material-icons-outlined MyFilter-txt-icon">
                    {open ? 'close' : 'expand_more'}
                </span>
            </div>
            {open &&
                <div className='MyFilterLoc-popup-external'>
                    <div className='MyFilterLoc-popup-internal'>
                        <span className='MyFilterLoc-popup-internal-title'>Επιλογή</span>
                        <div className='MyFilterLoc-popup-internal-items'>
                            <div className="MyFilterLoc-popup-internal-map">
                                <Wrapper  apiKey={"AIzaSyBT2if7zGVEamPsOO5I02MFM3COSVegWCY"} render={render}>
                                    <Map center={center} zoom={zoom}> 
                                            <Marker position={position} />                                    
                                    </Map>
                                </Wrapper>  
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
	);
};

export default MyFilterLoc;
