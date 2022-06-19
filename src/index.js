import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/header";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import "./assets/styles/main.scss";
require("./index.html");

export const DataContext = React.createContext({
  data: null,
  setData: null,
  loading: null,
  setLoading: null,
});

export const CartContext = React.createContext({
  items: null,
  setItems: null,
});

export default function App() {
  const [page, setPage] = useState(window.location.hash.split("/")[1] || "");
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Manage the SPA Routing
  window.onhashchange = () => {
    setPage(window.location.hash.split("/")[1]);
  };

  // Simulate API Data Fetch
  // Observation: The request is triggered twice due to React.StrictMode
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        fetch("assets/data.json")
          .then(async (data) => {
            console.log(data);
            setData(await data.json());
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      }, 1000);
    }
  }, [loading]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      <DataContext.Provider value={{ data: data, setData, loading, setLoading }}>
        <HeaderComponent></HeaderComponent>
        {page === "" && <HomePage></HomePage>}
        {page === "about" && <AboutPage></AboutPage>}
        {page === "contact" && <ContactPage></ContactPage>}
      </DataContext.Provider>
    </CartContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
