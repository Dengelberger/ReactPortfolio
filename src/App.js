import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"

function App () {
return (
  <div>
  <Header>
    <NavBar />
  </Header>
  <About />
  <Portfolio />
  <Contact />
  <Footer />
  </div>
)

}

export default App;