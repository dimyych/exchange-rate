/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import exit from "img/sideBar/exit-arrow.png";
import logo from "img/sideBar/logo.png";
import logoDark from "img/sideBar/logoDark.png";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";

const SideBar = ({handleDarkMode,darkMode,handleSideBar }) => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 44,
    height: 23,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(24px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: "1px 2px",
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#F59E0B",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 20,
      height: 20,
      borderRadius: 100,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 100,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <div className="sideBar ">
      <div className="sideBar__top">
        <img className="sideBar__top-logo lightLogo" src={logo} alt="" />
        <img className="sideBar__top-logo darkLogo" src={logoDark} alt="" />
        <img className="sideBar__top-exit" src={exit} alt="" onClick={handleSideBar} />
      </div>

      <nav className="sideBar__secondaryNav">
        <h2 className="sideBar__secondaryNav-title">СИСТЕМА</h2>
        <a className="sideBar__secondaryNav-item" href="#">
          Технічна підтримка 24\7
        </a>
        <a className="sideBar__secondaryNav-item" href="#">
          Партнерам
        </a>
        <a className="sideBar__secondaryNav-item" href="#">
          Політика конфиденціальності
        </a>
      </nav>

      <footer className="sideBar__footer">
        <FormGroup
          className="sideBar__footer-alarms"
          sx={{ marginRight: "18px" }}
          
        >
          <Stack direction="row" spacing={1} alignItems="center"  >
            {darkMode ? <AntSwitch checked inputProps={{ "aria-label": "ant design" }} onClick={handleDarkMode} /> : <AntSwitch  inputProps={{ "aria-label": "ant design" }} onClick={handleDarkMode} />}
            
          </Stack>
        </FormGroup>
        <h2 className="sideBar__footer-text">Dark mode</h2>
      </footer>
    </div>
  );
};

export default SideBar;
