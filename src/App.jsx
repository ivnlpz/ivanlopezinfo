import { Component } from "react";
import "./App.css";
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import WebPortfolio from "./components/WebPortfolio"
import Footer from "./components/Footer"
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App grid grid-cols-1 grid-rows-4">
        <Header/>
        <AboutMe/>
        <WebPortfolio/>
        <Footer/>
      </div>
    );
  }
}

export default App;
