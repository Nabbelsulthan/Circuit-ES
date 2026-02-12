
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Box from "@mui/material/Box";
import ServiceSol from './components/ServiceSol';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Enquiry from './components/Enquiry';

import ProductsSol from './components/ProductsSol';

import ScrollToTop from "./components/ScrollToTop";

import Footer from "./components/Footer";
import SolarServices from './components/SolarServices';

import { useLocation } from "react-router-dom";


function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app-layout">
      <ScrollToTop />
      <ResponsiveAppBar />

      <Box
        sx={{
          height: {
            xs: isHome ? "120px" : "80px",
            md: isHome ? "180px" : "80px",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServiceSol />} />
        <Route path="/contact" element={<Enquiry />} />
        <Route path="/products" element={<ProductsSol />} />
        <Route path="/solarservice" element={<SolarServices />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
