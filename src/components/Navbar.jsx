
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

const pages = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "PRODUCTS & SOLUTIONS", path: "/products" },
  { label: "SERVICES", path: "/services" },
  { label: "SOLAR SERVICES", path: "/facilities" },
  { label: "INFRASTRUCTURE", path: "/infra" },
  { label: "CONTACT US", path: "/contact" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "white",
        py: { xs: 2, md: 3 }, // more breathing room for big logo
        borderBottom: "1px solid #eee",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            flexDirection: "column",
            gap: { xs: 2, md: 3 },
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
            {/* Hamburger (left) */}
            <IconButton
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              sx={{
                position: "absolute",
                left: 0,
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Centered Logo (BIGGER) */}
            <Box component={Link} to="/">
              <Box
                component="img"
                src={Logo}
                alt="Circuit ES Logo"
                sx={{
                  height: 60, // ⬅️ increased for mobile
                  maxWidth: "100%",
                }}
              />
            </Box>
          </Box>

          {/* ================= MOBILE MENU ================= */}
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
            PaperProps={{
              sx: {
                backgroundColor: "white",
                mt: 1,
                minWidth: 240,
                borderRadius: 2,
                boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
              },
            }}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => {
              const isActive = location.pathname === page.path;

              return (
                <MenuItem
                  key={page.label}
                  component={Link}
                  to={page.path}
                  onClick={() => setAnchorElNav(null)}
                  sx={{
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: isActive ? "black" : "green",
                    position: "relative",
                    py: 1.5,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 16,
                      bottom: 6,
                      width: isActive ? "40%" : "0%",
                      height: "2px",
                      backgroundColor: "black",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      color: "black",
                    },
                    "&:hover::after": {
                      width: "40%",
                    },
                  }}
                >
                  {page.label}
                </MenuItem>
              );
            })}
          </Menu>

          {/* ================= DESKTOP LOGO ================= */}
          <Box
            component={Link}
            to="/"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Circuit ES Logo"
              sx={{
                height: 120, // ⬅️ BIG desktop logo
                maxWidth: "100%",
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.06)", // subtle (logo already large)
                },
              }}
            />
          </Box>

          {/* ================= DESKTOP NAV ================= */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
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
                    position: "relative",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: isActive ? "black" : "green",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -6,
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      backgroundColor: "black",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      color: "black",
                      transform: "translateY(-3px)",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {page.label}
                </Typography>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

