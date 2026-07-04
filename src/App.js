import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./Components/Nav/NavBar";
import Home from "./Components/Home/Home";
import DinnerMenu from "./Components/Menu/DinnerMenu";
import LunchMenu from "./Components/Menu/LunchMenu";
import WineList from "./Components/Menu/WineList";
import TakeOut from "./Components/Menu/TakeOut";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Components/Footer/Footer";

const Main = styled.div`
  text-align: center;
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Main className="App">
      <Router>
        <ScrollToTop />

        <NavBar />

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
