import React from 'react'
import "./members.css"

function Members() {
  return (
    <div>
    <div class="first">
    <h2>Memebers</h2>
    <button>+ Add Member</button></div>
    <div class="second">
    <input type="text" placeholder="Search Member" class="searching"/>
    <button>Group 1</button>
    <button>Group 2</button>
    <button>Group 3</button>
    <button>Group 4</button></div>
   <div class="container">
    <div class="item">
      <p class="paras">Oil</p>
      <div class="circular-checkbox">
        <input type="radio" id="oilAll" name="oilOptions" />
        <label for="oilAll">All</label>
      </div>
      <div class="circular-checkbox">
        <input type="radio" id="oilReceived" name="oilOptions" />
        <label for="oilReceived">Received</label>
      </div>
      <div class="circular-checkbox">
        <input type="radio" id="oilNotReceived" name="oilOptions" />
        <label for="oilNotReceived">Not Received</label>
      </div>
    </div>
    <div class="item">
      <p class="paras">Sugar</p>
      <div class="circular-checkbox">
        <input type="radio" id="sugarAll" name="sugarOptions" />
        <label for="sugarAll">All</label>
      </div>
      <div class="circular-checkbox">
        <input type="radio" id="sugarReceived" name="sugarOptions" />
        <label for="sugarReceived">Received</label>
      </div>
      <div class="circular-checkbox">
        <input type="radio" id="sugarNotReceived" name="sugarOptions" />
        <label for="sugarNotReceived">Not Received</label>
      </div>
    </div>
  </div>


</div>
  )
}

export default Members