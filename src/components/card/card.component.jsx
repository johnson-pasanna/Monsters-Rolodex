import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="mov"
      src={`https://robohash.org/${props.mov.id}?set=set2&size=180x180`}
    />
    <h1>{props.mov.name}</h1>
    <p>{props.mov.email}</p>
  </div>
);
