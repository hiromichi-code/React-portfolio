import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Header}>
          <Header />
        </Route>
        <Route path="/About" component={About}>
          <About />
        </Route>
        <Route path="/Portfolio" component={Portfolio}>
          <Portfolio />
        </Route>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
