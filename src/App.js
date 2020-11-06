import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="whole">
        <Header />
        <Switch className="section">
          <Route exact path={"/"} component={About} />
          <Route path={"/ReactPortfolio"} component={About} />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )

}

export default App;