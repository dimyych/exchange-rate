import React, { useState } from "react";

import NavBar from "./components/navBar/NavBar";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

const MainSection = ({
  usdEur,
  date,
  rates,
  rateFirst,
  setRateFirst,
  inputFirst,
  setInputFirst,
  rateSecond,
  setRateSecond,
  inputSecond,
  setInputSecond,
  setFirstInputCheck,
  setSecondInputCheck,
  handleSideBar
}) => {
  const RateStyle = styled(InputBase)(({ theme }) => ({
    width: "250px",
    height: "42px",
    background: "#F59E0B",
    border: "1px solid #D97706",
    borderRadius: "6px",
    color: "white",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    "& svg": { color: "white" },
  }));

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f59e0b",
      },
    },
  });

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
        width: 300,
      },
    },
  };

  return (
    <div className="mainSection">
      <NavBar usdEur={usdEur} handleSideBar={handleSideBar}/>
      <div className="mainSection__content">
        <div className="mainSection__rate">
          <div className="mainSection__rate-item">
            <h2 className="mainSection__rate-item-text">Конвертер валют</h2>
            <ThemeProvider theme={theme}>
              <FormControl>
                <TextField
                  value={inputFirst}
                  onChange={(e) => {
                    setInputFirst(e.target.value);
                    setFirstInputCheck(e.target.value);
                  }}
                  sx={{ marginBottom: "50px" }}
                  variant="standard"
                  color="primary"
                />
                <Select
                  sx={{ pl: "13px", margin: "0 auto" }}
                  value={rateFirst}
                  onChange={(e) => {
                    setRateFirst(e.target.value);
                    setInputFirst(1);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  input={<RateStyle />}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="" sx={{ height: "42px" }}>
                    <em>UAH Гривня</em>
                  </MenuItem>
                  {rates.map((rate, i) => {
                    return (
                      <MenuItem
                        key={i}
                        value={rate.rate}
                        sx={{ height: "42px" }}
                      >
                        {rate.cc} {rate.txt}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </ThemeProvider>
          </div>

          <div className="mainSection__rate-item">
            <h2 className="mainSection__rate-item-text">
              Курс на {date}
            </h2>
            <ThemeProvider theme={theme}>
              <FormControl>
                <TextField
                className="ddd"
                  value={inputSecond}
                  onChange={(e) => {
                    setInputSecond(e.target.value);
                    setSecondInputCheck(e.target.value);
                  }}
                  sx={{ marginBottom: "50px", color: 'white' }}
                  variant="standard"
                  color="primary"
                />
                <Select
                  sx={{ pl: "13px", margin: "0 auto" }}
                  value={rateSecond}
                  onChange={(e) => {
                    setRateSecond(e.target.value);
                    setInputFirst(1);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  input={<RateStyle />}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="" sx={{ height: "42px" }}>
                    <em>USD Долар США</em>
                  </MenuItem>
                  {rates.map((rate, i) => {
                    if (rate.cc != "USD")
                      return (
                        <MenuItem
                          key={i}
                          value={rate.rate}
                          sx={{ height: "42px" }}
                        >
                          {rate.cc} {rate.txt}
                        </MenuItem>
                      );
                  })}
                </Select>
              </FormControl>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
