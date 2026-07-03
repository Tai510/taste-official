import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/Nav/NavBar";
import Home from "./Components/Home/Home";
import DinnerMenu from "./Components/Menu/DinnerMenu";
import LunchMenu from "./Components/Menu/LunchMenu";
import WineList from "./Components/Menu/WineList";
import TakeOut from "./Components/Menu/TakeOut";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Components/Footer/Footer";
import Images from "../src/Images/taste.logo.jpg";
import PopUp from "./Components/PopUp/PopUp";

const TasteLogo = styled.img`
  height: 62px;
  width: 149px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    height: 40px;
    margin: auto;
    margin-left: -1px;
    margin-top: -22px;
    width: 80px;
  }

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    height: 40px;
    margin: auto;
    margin-top: 10px;
    width: 110px;
    margin-left: 0 !important;
  }
`;

const Main = styled.div`
  text-align: center;
`;

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Main className="App">
      <Router>
        <div className="logoNav">
          <div className="link-side">
            <NavBar />
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/lunch-menu" component={LunchMenu} />
        <Route path="/dinner-menu" component={DinnerMenu} />
        <Route path="/wine-list" component={WineList} />
        <Route path="/take-out" component={TakeOut} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    </Main>
  );
}

export default App;
