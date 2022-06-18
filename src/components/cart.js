import React from "react";

export default function CartComponent(props) {
  return (
    <div className="cart-container">
      <div className="cart-title">
        <span className="material-symbols-outlined">contact_page</span>Contact
      </div>
      <p className="cart-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus est, placerat sed ante vel, ultrices congue
        augue.
      </p>
      <div className="cart-title">
        <span className="material-symbols-outlined">shopping_cart</span>Cart
      </div>
      <div className="cart-items">{!props.items && <span className="cart-empty">Cart is empty</span>}</div>
    </div>
  );
}
