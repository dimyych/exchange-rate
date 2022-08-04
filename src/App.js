import React, { useEffect, useState } from "react";

import SideBar from "components/sideBar/SideBar";
import MainSection from "components/mainSection/MainSection";

import "style/style.scss";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sideBarActive, setSideBarActive] = useState(true);
  let appClasses = ["app"];
  if (darkMode) {
    appClasses.push("darkMode");
  }

  if (sideBarActive) {
    appClasses.push("sideBarActive");
  }

  const [rates, setRates] = useState([]);
  const [usdEur, setUsdEur] = useState([{rate:0}]);
  const [date, setDate] = useState();
  const [rateFirst, setRateFirst] = useState('');
  const [inputFirst, setInputFirst] = useState('');

  const [rateSecond, setRateSecond] = useState("");
  const [inputSecond, setInputSecond] = useState("");

  const [firstInputCheck, setFirstInputCheck] = useState("");
  const [secondInputCheck, setSecondInputCheck] = useState("");


  async function fetchRate() {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => response.json())
      .then((response) => {
        setRates(response);
        setUsdEur(
          response.filter((rate) => rate.cc == "USD" || rate.cc == "EUR")
        );
        setDate(response[0].exchangedate);
      });
  }

  useEffect(() => {
    fetchRate();
  }, []);

  const handleDarkMode = () =>{
    setDarkMode((prevState) => !prevState)
  }
  const handleSideBar = () =>{
    setSideBarActive((prevState) => !prevState)
  }


  useEffect(() => {
    if (!rateSecond && !rateFirst && inputFirst) {
      setInputSecond((inputFirst/usdEur[0].rate).toFixed(3))
      console.log(inputFirst);
    }

    if(!rateFirst && rateSecond && inputFirst){
      setInputSecond((inputFirst/rateSecond).toFixed(3))
    }

    if(rateFirst && !rateSecond && inputFirst){
      setInputSecond((inputFirst*rateFirst/usdEur[0].rate).toFixed(3))
    }

    if(rateFirst && rateSecond && inputFirst){
      setInputSecond((inputFirst*rateFirst/rateSecond).toFixed(3))
    }

    if(!inputFirst){
      setInputSecond('')
    }

  }, [firstInputCheck,rateFirst,rateSecond]);

  useEffect(() => {

    if (!rateSecond && !rateFirst && inputSecond) {
      setInputFirst((inputSecond*usdEur[0].rate).toFixed(3))
    }

    if(!rateFirst && rateSecond && inputSecond){
      setInputFirst((inputSecond*rateSecond).toFixed(3))
    }

    if(rateFirst && !rateSecond && inputSecond){
      setInputFirst((inputSecond/rateFirst*usdEur[0].rate).toFixed(3))
    }

    if(rateFirst && rateSecond && inputSecond){
      setInputFirst((inputSecond*rateSecond/rateFirst).toFixed(3))
    }

    if(!inputSecond){
      setInputFirst('')
    }


  }, [secondInputCheck]);

  return (
    <div className={appClasses.join(" ")}>
      <SideBar handleDarkMode={handleDarkMode} darkMode={darkMode} handleSideBar={handleSideBar}/>
      <MainSection
        usdEur={usdEur}
        date={date}
        rates={rates}
        rateFirst={rateFirst}
        setRateFirst={setRateFirst}
        inputFirst={inputFirst}
        setInputFirst={setInputFirst}
        rateSecond={rateSecond}
        setRateSecond={setRateSecond}
        inputSecond={inputSecond}
        setInputSecond={setInputSecond}
        setFirstInputCheck={setFirstInputCheck}
        setSecondInputCheck={setSecondInputCheck}
        handleSideBar={handleSideBar}
      />
    </div>
  );
}

export default App;
