import React from "react";
import "../sassFiles/ViewInMap.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function ViewInMap(props) {
    return (
        <div className="viewInMap" style={props.shouldReverse ? { flexDirection: "row-reverse" } :
            { flexDirection: "row" }}>
            <div className="mapDetails">
                <h1>{props.country}</h1>
                <div>
                    <div>
                        <b>{props.nameOfOffice}</b>
                        <div>{props.addressOfOffice1}</div>
                        <div>{props.addressOfOffice2}</div>
                    </div>
                    <div>
                        <b>Contact</b>
                        <div>{props.phoneNumber}</div>
                        <div>{props.email}</div>
                    </div>
                </div>
            </div>
            <MapContainer center={[props.long, props.lat]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.long, props.lat]}>
                    <Popup>{props.nameOfOffice}</Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}