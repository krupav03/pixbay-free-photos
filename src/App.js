import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import Search from "./Search";
import "./App.css";
import "./Home.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search/:imgname" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
