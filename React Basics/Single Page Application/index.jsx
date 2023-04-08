import React from "react";
import ReactDOM from "react-dom";

import { wrapperStyle } from "./styles.jsx";
import { Home, Aperture, ShutterSpeed, ISO } from "./pages.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./navigation.jsx"
const App = () => {
  return (
    <BrowserRouter>
    <div style={wrapperStyle.wrapper}>
      <Navigation />
      <h1>Camera Tips</h1>
      <Routes>
      <Route exact path="/aperture" element={<Aperture />} />
      <Route exact path="/shutterspeed" element={<ShutterSpeed />} />
      <Route exact path="/iso" element={<ISO />} />
      <Route exact path="/" element={ <Home /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;