// import React, { useEffect, useState } from 'react'
// import { Marker, Popup, useMap } from 'react-leaflet'
// import L from 'leaflet'
// import "leaflet/dist/leaflet.css"
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import * as ELG from 'esri-leaflet-geocoder'

// let DefaulIcon = L.icon ({
//     iconUrl : icon,
//     shadowUrl: iconShadow
// })
// L.Marker.prototype.options.icon = DefaulIcon


// const GeoCoderMarker = ({address}) => {
//    // console.log(address);
//     const map = useMap()
//     const [position, setPosition] = useState([23.9525349,75.7785443])

//     useEffect(()=> {
//         ELG.geocode().text(address).run((err, results, response)=> {
//             if(results?.results?.length > 0){
//                 const { lat, lng } = results?.results[0].latlng
//                 console.log([lat, lng]);
//                 setPosition([lat, lng])
//                 map.flyTo([lat, lng], 6)
//             }
//         })
//     }, [address])

//   return (
//       <Marker position={position} icon={DefaulIcon}>
//            //console.log(position);
//     <Popup/>
//     </Marker>
//   )
// }

// export default GeoCoderMarker;
import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as ELG from 'esri-leaflet-geocoder';
import axios from 'axios';

// const GeoCoderMarker = ({ address }) => {
//     const map = useMap();
//     const [position, setPosition] = useState([23.9525349, 75.7785443]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await ELG.geocode().text(address).run();
//                 if (response && response.results && response.results.length > 0) {
//                     const { lat, lng } = response.results[0].latlng;
//                     console.log('Geocoding success:', [lat, lng]);
//                     setPosition([lat, lng]);
//                     map.flyTo([lat, lng], 6);
//                 } else {
//                     console.error('No results found for geocoding:', response);
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [address, map]);

//     return (
//         <Marker position={position}>
//             <Popup>{address}</Popup>
//         </Marker>
//     );
// };

// export default GeoCoderMarker;
// const fetchData = async () => {
//     try {
//         const response = await ELG.geocode()
//             .text(address)
//             .params({
//                 token: 'dfkldfs', // Replace with your actual API token
//             })
//             .run();

//         if (response && response.results && response.results.length > 0) {
//             const { lat, lng } = response.results[0].latlng;
//             console.log('Geocoding success:', [lat, lng]);
//             setPosition([lat, lng]);
//             map.flyTo([lat, lng], 6);
//         } else {
//             console.error('No results found for geocoding:', response);
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
//     return (
//         <Marker position={position}>
//             <Popup>{address}</Popup>
//         </Marker>
//     );
// };

// export default GeoCoderMarker;

const GeoCoderMarker = ({ address }) => {
    const map = useMap();
    const [position, setPosition] = useState([0, 0]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                        address
                    )}&key=AIzaSyD-t4hNLX31RbOPY_xVvDkrgu4uIY3nAdQ`
                );
                const { results } = response.data;
                if (results && results.length > 0) {
                    const { lat, lng } = results[0].geometry.location;
                    setPosition([lat, lng]);
                    map.flyTo([lat, lng], 6);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [address, map]);

    return (
        <Marker position={position}>
            <Popup>{address}</Popup>
        </Marker>
    );
};

export default GeoCoderMarker;



