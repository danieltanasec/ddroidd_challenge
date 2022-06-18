import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/home';
import "./assets/styles/main.scss";
require('./index.html');


export default function App() {
  return (
    <HomePage></HomePage>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
