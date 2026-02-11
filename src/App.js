
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Box from "@mui/material/Box";
 import ServiceSol from './components/ServiceSol';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";


// import Vision from './components/Vision';
// import Mission from './components/Mission';

// import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
            {/* spacer */}
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
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
