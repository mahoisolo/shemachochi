import React from 'react'
import { Link, Route, Routes } from "react-router-dom";



function Header2() {


  return (
    <div className="dashdis">
      <h2>Dashboard</h2>
      <div className="distribute">
        <Link to="distribute">
          <button>+ Distribute goods</button>
        </Link>
      </div>
    </div>
  );
}


export default Header2