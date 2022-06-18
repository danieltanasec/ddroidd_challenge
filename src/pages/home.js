import React from "react";
import CardComponent from "../components/card";
import CartComponent from "../components/cart";
import HeaderComponent from "../components/header";

export default function HomePage() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <main className="container">
        <div className="sub-container">
          <CartComponent></CartComponent>
          <div className="items-container">
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
          </div>
        </div>
      </main>
    </div>
  );
}
