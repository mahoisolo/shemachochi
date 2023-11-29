import React from "react";
import DashBoard from "./HomePage/DashBoard/DashBoard";
import Distribute from "./HomePage/DashBoard/Distribute";
import { Route, Routes } from "react-router-dom";
import Header from "./HomePage/DashBoard/Header";
import Goods from "./HomePage/Goods/Goods";
import G from "./HomePage/Goods/G";
import Members from "./HomePage/Members/Members";
// import Goods from "./HomePage/Goods/Goods";
// import Header2 from "./HomePage/DashBoard/Header2";
import Nav from "./HomePage/DashBoard/Nav"

function App() {
  return (
    <>
      <Nav />
      <Header />
      {/* <G/> */}
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/goods" element={<G />} />
        <Route path="/members" element={<Members/>} />
      </Routes>
    </>
  );
}

export default App;
