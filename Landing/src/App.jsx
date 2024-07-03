import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";
import "./styles/App.css";
import Servicios from "./pages/Servicios";
import { Contacto } from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
