
// import './App.css';
// import Hero from './components/Hero';
// import About from './components/About';
// import Box from "@mui/material/Box";
// import ServiceSol from './components/ServiceSol';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ResponsiveAppBar from "./components/Navbar";
// import Enquiry from './components/Enquiry';

// import ProductsSol from './components/ProductsSol';

// import ScrollToTop from "./components/ScrollToTop";

// import Footer from "./components/Footer";
// import SolarServices from './components/SolarServices';

// import { useLocation } from "react-router-dom";
// import Infrastructure from './components/Infrastructure';

// import FloatingWhatsApp from './components/FloatingWhatsApp';

// import CESConnect from './components/CESConnect';

// import CESConnectFloat from './components/CESConnectFloat';

// import CustomerPortal from "./components/portal/CustomerPortal";

// import ProtectedRoute from "./components/ProtectedRoute";

// import Projects from "./components/Projects";

// import ProjectDocuments from "./components/ProjectDocuments";

// import DispatchStatus from "./components/DispatchStatus";


// function AppContent() {
//   const location = useLocation();
//   const isHome = location.pathname === "/";

//   return (
//     <div className="app-layout">
//       <ScrollToTop />
//       <ResponsiveAppBar />

//       <Box
//         sx={{
//           height: {
//             xs: isHome ? "120px" : "80px",
//             md: isHome ? "180px" : "90px",
//           },
//         }}
//       />


//       <div className="page-content">

//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<ServiceSol />} />
//           <Route path="/contact" element={<Enquiry />} />
//           <Route path="/products" element={<ProductsSol />} />
//           <Route path="/solarservice" element={<SolarServices />} />
//           <Route path="/infrastructure" element={<Infrastructure />} />
//           <Route path="/portal" element={<CustomerPortal />} />
//           <Route
//             path="/ces-connect"
//             element={
//               <ProtectedRoute>
//                 <CESConnect />
//               </ProtectedRoute>
//             }
//           />


//           <Route
//             path="/projects"
//             element={<Projects />}
//           />

//           <Route
//             path="/project/:id"
//             element={<ProjectDocuments />}
//           />

//           <Route
//             path="/dispatch-status"
//             element={<DispatchStatus />}
//           />
//         </Routes>

//       </div>


//       <CESConnectFloat />
//       <FloatingWhatsApp />
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;




import AppRoutes from "./routes/AppRoutes";

function App() {
    return <AppRoutes />;
}

export default App;