import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { BsPerson, BsArrowRight } from "react-icons/bs";
import { BiHelpCircle, BiCart } from "react-icons/bi";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function BurgerBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        style={{ color: "black" }}
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 1, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "250px",
            boxSizing: "border-box",
            display: "flex",
            padding: "10px 10px",
            zIndex: "999"
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <a href="/">
            <img
              className="navLeft__logo burger__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Shamrock.svg"
              alt=""
            />
          </a>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <div className="burger__list">
          <div className="burger__list--container">
            <div className="burger__list--wrapper">
              <a
                onClick={handleDrawerClose}
                href="#about"
                className="burger__list--header"
              >
                About
              </a>
            </div>
            <div className="burger__list--wrapper">
              <a
                onClick={handleDrawerClose}
                href="#services"
                className="burger__list--header"
              >
                Services
              </a>
            </div>
            <div className="burger__list--wrapper">
              <a
                onClick={handleDrawerClose}
                href="#quotes"
                className="burger__list--header"
              >
                Quotes
              </a>
            </div>
          </div>
          {/* <ul className="burger__links--wrapper">
            <a
              onClick={handleDrawerClose}
              href="#services"
              className="burger__links"
            >
              <BiHelpCircle />
              <p className="burger__link">Help Center</p>
            </a>
            <li className="burger__links">
              <BsPerson />
              <p className="burger__link">Account</p>
            </li>
            <li className="burger__links">
              <BiCart />
              <p className="burger__link">Basket</p>
            </li>
          </ul> */}
        </div>
      </Drawer>
    </Box>
  );
}
