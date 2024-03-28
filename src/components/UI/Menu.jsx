import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor: "#06b6D4",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="demo-customized-button"
        aria-haspopup="true"
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Services
      </div>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div className="flex flex-col justify-center py-4 px-10 bg-cyan-500 items-center space-y-5">
          <li className="" onClick={handleClose} disableRipple>
            <a href="/pressure-washing">
              <h3 className="text-xl font-bold no-underline hover:opacity-70 transition-all duration-50 text-white">
                Pressure Washing
              </h3>
            </a>
          </li>
          <li className="" onClick={handleClose} disableRipple>
            <a href="/window-cleaning">
              <h3 className="text-xl font-bold no-underline hover:opacity-70 transition-all duration-50 text-white">
                Window Cleaning
              </h3>
            </a>
          </li>
          <li className="" onClick={handleClose} disableRipple>
            <a href="/gutter-cleaning">
              <h3 className="text-xl font-bold no-underline hover:opacity-70 transition-all duration-50 text-white">
                Gutter Cleaning
              </h3>
            </a>
          </li>
          <li className="" onClick={handleClose} disableRipple>
            <a href="/sealing">
              <h3 className="text-xl font-bold no-underline hover:opacity-70 transition-all duration-50 text-white">
                Driveway Sealing
              </h3>
            </a>
          </li>
        </div>
      </StyledMenu>
    </div>
  );
}
