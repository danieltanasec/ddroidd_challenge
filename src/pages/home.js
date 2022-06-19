import React, { useContext, useState } from "react";
import { DataContext } from "../index";
import CardComponent from "../components/card";
import CartComponent from "../components/cart";
import CardBigComponent from "../components/card-big";

export function HomePage() {
  const { data, loading } = useContext(DataContext);
  const [selected, setSelected] = useState();

  return (
    <main className="container">
      <div className="sub-container">
        <CartComponent></CartComponent>
        {loading && (
          <div className="loading-container">
            <span></span>
          </div>
        )}
        <div className="items-container">
          {selected && <CardBigComponent item={selected}></CardBigComponent>}
          {selected && (
            <span className="material-symbols-outlined back-button" onClick={() => setSelected(undefined)}>
              arrow_back
            </span>
          )}
          {!selected &&
            data.map((d) => {
              return (
                <div
                  key={d.id}
                  onClick={() => {
                    setSelected(d);
                  }}
                >
                  <CardComponent image={d.url} title={d.title} description={d.description}></CardComponent>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
