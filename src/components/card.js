import React from "react";

export default function CardComponent(props) {
  return (
    <div className="card-container">
      <img src={props.image} alt={props.description} height="216px" width="auto"></img>
      <p>{props.title}</p>
      <span>{props.description}</span>
    </div>
  );
}
