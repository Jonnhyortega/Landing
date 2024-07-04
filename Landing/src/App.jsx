import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";
import "./styles/App.css";
import ServiciosCarrusel from "./pages/ServiciosCarrusel";
import { Dojos } from "./pages/Dojos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="servicios" element={<ServiciosCarrusel />} />
          <Route path="dojos" element={<Dojos />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
