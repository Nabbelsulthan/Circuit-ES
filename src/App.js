
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







function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <ScrollToTop/>
        <ResponsiveAppBar />

        <Box
          sx={{
            height: {
              xs: "96px",
              md: "200px",
            },
          }}
        />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServiceSol />} />
          <Route path="/contact" element={<Enquiry />} />
          <Route path="/products" element={<ProductsSol />} />
        </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}


export default App;




