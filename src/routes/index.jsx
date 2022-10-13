import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../App";
import Detail from "../component/Pokeinfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
