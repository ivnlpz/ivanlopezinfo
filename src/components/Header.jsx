import ivanLogo from "../assets/ivanlopez.svg";
import { Component } from "react";

class Header extends Component {
  render() {
    return (
        <div className="flex justify-items-center flex-col bg-slate-400">
          <img src={ivanLogo} className="main-logo" alt="ivanlopez.info logo" />
        <h1 className="text-3xl m-2 font-cutive text-lime-100">Tokyo Based Web Creative</h1>
        </div>
    );
  }
}

export default Header;
