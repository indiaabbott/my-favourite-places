import React from 'react'
import './Content.css'

interface PlaceProps {
    title: string;
    placeName: string;
    countryName: string;
    mainImage: string;
    googleMaps: string;
    explanation: string;
}

function Content(props: PlaceProps) {
    const {title, placeName, countryName, mainImage, googleMaps, explanation} = props;
    return (
       <div className="Content">
           <img src = {mainImage}/>
           <h2>{title}</h2>
           <h1>{placeName}, {countryName} {googleMaps}</h1>
           <p>{explanation}</p>
       </div>

    );
    
}
export default Content