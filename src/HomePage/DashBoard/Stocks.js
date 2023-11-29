import React from "react";
import Oil from "../../resources/images/oil.png";
import Sugar from "../../resources/images/sugar.png";

function Stocks() {
    return (
      <>
    <div className="changes">
      <div className="oil-container-box">
        <div className="oil-container">
          <div className="oil-level" id="oilLevel"></div>
          <img className="oil-image" src={Oil} alt="Oil Container Image" />
          <p className="oil-text">Oil</p>
          <div className="oil-text" id="oilText">
            510/600 Litre
          </div>
          <div className="oil-text" id="oilMembers">
            120/200 members
          </div>
        </div>
      </div>

      <div className="sugar-container-box">
        <div className="sugar-container">
          <div className="sugar-level" id="sugarLevel"></div>
          <img className="oil-image" src={Sugar} alt="Sugar Container Image" />
          <p className="sugar-text">Sugar</p>
          <div className="sugar-text" id="sugarText">
            550/600 Kilo
          </div>
          <div className="sugar-text" id="sugarMembers">
            50/200 members
          </div>
        </div>
      </div>
      </div>
    <div class="buttonandall">
    <div class="buttons">
        <input type="text" id="search" placeholder="search member in the group" />
    </div>
            <button class="allmember">-All Members-</button></div></>
  );
}

export default Stocks;
