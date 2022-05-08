import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="navbar-filler"></div>
      <div className="content">
        <Routes />
      </div>
    </>
  );
};

export default App;
