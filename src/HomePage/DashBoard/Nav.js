import React from "react";
import Oil from "../../resources/images/oil.png";
import Sugar from "../../resources/images/sugar.png";
import { Link, Route, Routes } from "react-router-dom";
import "./dashboard.css";

function Nav() {
  return (
    <div className="navigations">
      <div className="twoimages">
        <img src={Oil} alt="" />
        <img src={Sugar} alt="" />
        shemachochi
      </div>
      <div className="admin">
        Eden
        <br />
        Super Admin
      </div>
      <ul>
        <Link to="dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="goods">
          <li>Goods</li>
        </Link>
        <Link to="members">
          <li>Members</li>
        </Link>
        <Link to="reports">
          <li>Reports</li>
        </Link>
        <Link to="setting">
          <li>Setting</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
