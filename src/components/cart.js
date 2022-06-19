import React, { useContext } from "react";
import { CartContext } from "../index";

export default function CartComponent() {
  const { items } = useContext(CartContext);

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
        <span className="material-symbols-outlined">shopping_cart</span>Cart {items.length ? `(${items.length})` : ""}
      </div>
      <div className="cart-items">
        {!items.length && <span className="cart-empty">Cart is empty</span>}
        {items.map((it) => {
          return (
            <div className="cart-item">
              <span>{it.price}</span>
              {it.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
