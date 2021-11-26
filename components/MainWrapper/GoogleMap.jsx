import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React from 'react'
import {mapStyles} from './mapStyles.js';
import BlockPerson from './RightPanel/BlockPerson.jsx'

const containerStyle = {
    width: '100%',
    height: '100%',
};
const options = {
    styles: mapStyles,
};

const dataPoints = [
    {id: 0, lat: 47.444, lng: -122.176},
    {id: 1, lat: 47.4, lng: -122.4},
    {id: 2, lat: 47.22, lng: -122.12},
    {id: 3, lat: 47.34, lng: -122.3},
    {id: 4, lat: 47.56, lng: -122.1},
    {id: 5, lat: 47.83, lng: -122.5},
    {id: 6, lat: 47.444, lng: -122.6},
    {id: 7, lat: 47.6, lng: -122.7},
    {id: 8, lat: 47.7, lng: -123.1},
    {id: 9, lat: 47.8, lng: -122.2},
    {id: 10, lat: 47.9, lng: -122.5},
]

const GoogleMapContainer = (props) => {

    const [infoPosition, setInfoPosition] = React.useState(null)

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDQBWw_sKmxfCteky7d-kFwU5bvz5x2Gtw',
    });

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading maps';

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
                zoom={10}
                center={{ lat: 47.444, lng: -122.176 }}
                options={options}
                // style={props.mapStyles.mapStyle}
                // defaultOptions={{ styles: mapStyle}}
            >

            {

                dataPoints.map((el, index) => <Marker key={`${index}_marker_${el.id}`}
                    icon={{
                        url: `/img/icon_point.svg`,
                        scaledSize: window.google.maps.Size(30, 30)
                    }}
                    position={{ lat: el.lat, lng: el.lng}} 
                    onClick={() => {
                        setInfoPosition([el.lat, el.lng])
                    }}
                />)

            }
            {
                infoPosition && <InfoWindow position={{
                    lat: infoPosition[0],
                    lng: infoPosition[1]
                }}
                onCloseClick={() => setInfoPosition(null)}
                >
                    <BlockPerson forMap verified rating="4" breed="Main coon" index="0" cattery="Newlogica Cattery" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                </InfoWindow>
            }
            
                
        </GoogleMap>
    )
}

export default GoogleMapContainer