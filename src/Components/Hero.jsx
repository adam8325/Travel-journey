import React from "react";

export default function Hero(props) {
    return (
        <div className ="container">
            <div className="hero-image">
                <img src={props.item.imageUrl} className="image"/>                
            </div>
            <div className="hero-text">                    
                    <span className="location-logo">{props.item.locationLogo}</span>
                    <span className="location">{props.item.location} </span>
                    <span><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                    <h1>{props.item.title}</h1>
                    <span>{props.item.startDate}</span> -
                    <span>{props.item.endDate}</span>
                    <p>{props.item.description}</p>
                    
            </div>
        </div>

    )
}