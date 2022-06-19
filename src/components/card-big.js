import React, { useState, useContext } from "react";
import { CartContext } from "../index";

export default function CardBigComponent(props) {
  const [added, setAdded] = useState(false);
  const { items, setItems } = useContext(CartContext);

  function addToCart() {
    setAdded(true);
    let newItems = [];
    items.forEach((e) => {
      newItems.push(e);
    });
    newItems.push(props.item);
    setItems(newItems);
  }

  return (
    <div className="card-big-container">
      <img src={props.item.url} alt={props.item.description} width="100%" height="auto"></img>
      <div className="card-content">
        <div className="card-text">
          <p>{props.item.title}</p>
          <span>{props.item.description}</span>
        </div>
        <button className={added ? "button-disabled" : ""} disabled={added} onClick={() => addToCart()}>
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
