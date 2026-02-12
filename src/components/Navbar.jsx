// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Container from "@mui/material/Container";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link, useLocation } from "react-router-dom";

// import Logo from "../assets/circuitES1-logo.png";
// import "./Navbar.css";


// import CloseIcon from "@mui/icons-material/Close";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import BuildIcon from "@mui/icons-material/Build";
// import SolarPowerIcon from "@mui/icons-material/SolarPower";
// import BusinessIcon from "@mui/icons-material/Business";
// import ContactMailIcon from "@mui/icons-material/ContactMail";
// import InventoryIcon from "@mui/icons-material/Inventory";


// const pages = [
//   { label: "HOME", path: "/" },
//   { label: "ABOUT US", path: "/about" },
//   { label: "PRODUCTS & SOLUTIONS", path: "/products" },
//   { label: "SERVICES", path: "/services" },
//   { label: "SOLAR SERVICES", path: "/solarservice" },
//   { label: "INFRASTRUCTURE", path: "/infra" },
//   { label: "CONTACT US", path: "/contact" },
// ];

// const iconMap = {
//   "/": <HomeIcon />,
//   "/about": <InfoIcon />,
//   "/products": <InventoryIcon />,
//   "/services": <BuildIcon />,
//   "/solarservice": <SolarPowerIcon />,
//   "/infra": <BusinessIcon />,
//   "/contact": <ContactMailIcon />,
// };


// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [scrolled, setScrolled] = React.useState(false);
//   const location = useLocation();

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <AppBar
//       position="fixed"
//       elevation={0}
//       className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}
//       sx={{
//         transition: "all 0.4s ease",
//         py: scrolled ? { xs: 1, md: 1.2 } : { xs: 2, md: 3 },
//       }}
//     >

//       <Container maxWidth="xl">
//         <Toolbar
//           disableGutters
//           sx={{
//             flexDirection: "column",
//             gap: scrolled ? 1.5 : 2.5,
//             transition: "all 0.3s ease",
//           }}
//         >

//           {/* MOBILE HEADER */}
//           <Box
//             sx={{
//               width: "100%",
//               display: { xs: "flex", md: "none" },
//               alignItems: "center",
//               justifyContent: "center",
//               position: "relative",
//             }}
//           >
//             <IconButton
//               onClick={(e) => setAnchorElNav(e.currentTarget)}
//               sx={{ position: "absolute", left: 0 }}
//             >
//               <MenuIcon />
//             </IconButton>

//             <Box component={Link} to="/">
//               <Box
//                 component="img"
//                 src={Logo}
//                 alt="Circuit ES Logo"
//                 sx={{
//                   height: scrolled ? 45 : 60,
//                   transition: "all 0.3s ease",
//                 }}
//               />
//             </Box>
//           </Box>

//           {/* MOBILE MENU */}
//           {/* <Menu
//             anchorEl={anchorElNav}
//             open={Boolean(anchorElNav)}
//             onClose={() => setAnchorElNav(null)}
//             sx={{ display: { xs: "block", md: "none" } }}
//           >
//             {pages.map((page) => (
//               <MenuItem
//                 key={page.label}
//                 component={Link}
//                 to={page.path}
//                 onClick={() => setAnchorElNav(null)}
//               >
//                 {page.label}
//               </MenuItem>
//             ))}
//           </Menu> */}

//           {/* <Menu
//   anchorEl={anchorElNav}
//   open={Boolean(anchorElNav)}
//   onClose={() => setAnchorElNav(null)}
//   PaperProps={{
//     className: "mobile-menu-paper"
//   }}
//   MenuListProps={{
//     className: "mobile-menu-list"
//   }}
//   sx={{ display: { xs: "block", md: "none" } }}
// >
//   {pages.map((page) => {
//     const isActive = location.pathname === page.path;

//     return (
//       <MenuItem
//         key={page.label}
//         component={Link}
//         to={page.path}
//         onClick={() => setAnchorElNav(null)}
//         className={`mobile-menu-item ${isActive ? "active" : ""}`}
//       >
//         {page.label}
//       </MenuItem>
//     );
//   })}
// </Menu> */}


// <Menu
//   anchorEl={anchorElNav}
//   open={Boolean(anchorElNav)}
//   onClose={() => setAnchorElNav(null)}
//   PaperProps={{
//     className: "premium-mobile-menu",
//   }}
//   sx={{
//     display: { xs: "block", md: "none" },
//   }}
// >
//   <Box className="mobile-menu-header">
//     <IconButton onClick={() => setAnchorElNav(null)}>
//       <CloseIcon />
//     </IconButton>
//   </Box>

//   {pages.map((page, index) => {
//     const isActive = location.pathname === page.path;

//     return (
//       <MenuItem
//         key={page.label}
//         component={Link}
//         to={page.path}
//         onClick={() => setAnchorElNav(null)}
//         className={`premium-menu-item ${isActive ? "active" : ""}`}
//         style={{ animationDelay: `${index * 0.08}s` }}
//       >
//         <span className="menu-icon">
//           {iconMap[page.path]}
//         </span>
//         {page.label}
//       </MenuItem>
//     );
//   })}
// </Menu>



//           {/* DESKTOP LOGO */}
//           <Box
//             component={Link}
//             to="/"
//             sx={{ display: { xs: "none", md: "block" } }}
//           >
//             <Box
//               component="img"
//               src={Logo}
//               alt="Circuit ES Logo"
//               sx={{
//                 height: scrolled ? 85 : 120,
//                 transition: "all 0.3s ease",
//               }}
//             />
//           </Box>

//           {/* DESKTOP NAV */}
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               gap: 4,
//             }}
//           >
//             {pages.map((page) => {
//               const isActive = location.pathname === page.path;

//               return (
//                 <Typography
//                   key={page.label}
//                   component={Link}
//                   to={page.path}
//                   sx={{
//                     fontWeight: 600,
//                     letterSpacing: "0.08em",
//                     color: isActive ? "#000" : "#4b8f1d",
//                     textDecoration: "none",
//                     fontSize: scrolled ? "0.9rem" : "1rem",
//                     transition: "all 0.2s ease",
//                     "&:hover": {
//                       color: "#000",
//                     },
//                   }}
//                 >
//                   {page.label}
//                 </Typography>
//               );
//             })}
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;



import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/circuitES1-logo.png";
import "./Navbar.css";

import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import BusinessIcon from "@mui/icons-material/Business";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InventoryIcon from "@mui/icons-material/Inventory";

const pages = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "PRODUCTS & SOLUTIONS", path: "/products" },
  { label: "SERVICES", path: "/services" },
  { label: "SOLAR SERVICES", path: "/solarservice" },
  { label: "INFRASTRUCTURE", path: "/infra" },
  { label: "CONTACT US", path: "/contact" },
];

const iconMap = {
  "/": <HomeIcon />,
  "/about": <InfoIcon />,
  "/products": <InventoryIcon />,
  "/services": <BuildIcon />,
  "/solarservice": <SolarPowerIcon />,
  "/infra": <BusinessIcon />,
  "/contact": <ContactMailIcon />,
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}
      sx={{
        transition: "all 0.4s ease",
        py: scrolled ? { xs: 1, md: 1.2 } : { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            transition: "all 0.4s ease",
            flexDirection: scrolled ? "row" : "column",
            alignItems: "center",
            justifyContent: scrolled ? "space-between" : "center",
            gap: scrolled ? 0 : 2,
          }}
        >
          {/* ================= MOBILE HEADER ================= */}
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <IconButton
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              sx={{ position: "absolute", left: 0 }}
            >
              <MenuIcon />
            </IconButton>

            <Box component={Link} to="/">
              <Box
                component="img"
                src={Logo}
                alt="Circuit ES Logo"
                sx={{
                  height: scrolled ? 45 : 60,
                  transition: "all 0.4s ease",
                }}
              />
            </Box>
          </Box>

          {/* ================= DESKTOP LOGO ================= */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: "none", md: "block" },
              transition: "all 0.4s ease",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Circuit ES Logo"
              sx={{
                height: scrolled ? 70 : 110,
                transition: "all 0.4s ease",
              }}
            />
          </Box>

          {/* ================= DESKTOP NAV ================= */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: scrolled ? 4 : 5,
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              mt: scrolled ? 0 : 1,
              transition: "all 0.4s ease",
            }}
          >
            {pages.map((page) => {
              const isActive = location.pathname === page.path;

              return (
                <Typography
                  key={page.label}
                  component={Link}
                  to={page.path}
                  sx={{
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: isActive ? "#000" : "#4b8f1d",
                    textDecoration: "none",
                    fontSize: scrolled ? "0.9rem" : "1rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#000",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {page.label}
                </Typography>
              );
            })}
          </Box>

          {/* ================= MOBILE MENU ================= */}
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
            PaperProps={{
              className: "premium-mobile-menu",
            }}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Box className="mobile-menu-header">
              <IconButton onClick={() => setAnchorElNav(null)}>
                <CloseIcon />
              </IconButton>
            </Box>

            {pages.map((page, index) => {
              const isActive = location.pathname === page.path;

              return (
                <MenuItem
                  key={page.label}
                  component={Link}
                  to={page.path}
                  onClick={() => setAnchorElNav(null)}
                  className={`premium-menu-item ${isActive ? "active" : ""}`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <span className="menu-icon">
                    {iconMap[page.path]}
                  </span>
                  {page.label}
                </MenuItem>
              );
            })}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;


