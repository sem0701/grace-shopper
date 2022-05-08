import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes />
      </div>
    </>
  );
};

export default App;
