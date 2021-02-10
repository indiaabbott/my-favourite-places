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
           <div className="Image"><img src = {mainImage} alt="My Favourite Places" className="Image1"/></div>
           <h1>{title}</h1>
           <h2>{placeName}, {countryName} (<a href = {googleMaps}>map link</a>)</h2>
           <p>{explanation}</p>
       </div>
    );
    
}
export default Content