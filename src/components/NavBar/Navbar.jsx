import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: "10px" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Product
            </Typography>
            <Typography className="link">
              {" "}
              <Link
                to="/"
                sx={{ flexGrow: 1 }}
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" color="primary">
                  Home
                </Button>
              </Link>
              {"   "}
              <Link
                to="/About"
                sx={{ flexGrow: 1 }}
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" color="primary">
                  About
                </Button>
              </Link>
            </Typography>

            <Link to="/Cart" style={{ textDecoration: "none" }}>
              <IconButton color="error" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
                <b style={{ color: "black" }}>
                  {cartItems.length === 0 ? "" : cartItems.length}
                </b>
              </IconButton>
            </Link>

            <Link to="/Favorite">
              <IconButton color="error">
                {" "}
                <FavoriteRoundedIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </>
  );
};

export default Navbar;
