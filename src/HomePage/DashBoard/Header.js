import React, { useState } from "react";
// import Goods from "./Goods";
import Header2 from "./Header2";
import { Link, Route, Routes } from "react-router-dom";
function Header() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <>
      <div className="group">
        <button
          className={selectedGroup === "Group 1" ? "selected" : ""}
          onClick={() => handleGroupClick("Group 1")}
        >
          Group 1
        </button>
        <button
          className={selectedGroup === "Group 2" ? "selected" : ""}
          onClick={() => handleGroupClick("Group 2")}
        >
          Group 2
        </button>
        <button
          className={selectedGroup === "Group 3" ? "selected" : ""}
          onClick={() => handleGroupClick("Group 3")}
        >
          Group 3
        </button>
        <button
          className={selectedGroup === "Group 4" ? "selected" : ""}
          onClick={() => handleGroupClick("Group 4")}
        >
          Group 4
        </button>
      </div>

     
    </>
  );
}

export default Header;
