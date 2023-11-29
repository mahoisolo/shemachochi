import React from "react";
import Home from "../resources/images/homepage.jpg";
import "./login.css"

function Login() {
  return (
    <>
      <div className="container">
        <div className="content-container">
          <h1>Shemachochi Management System</h1>
          <div className="all">
            <div className="forms">
              <form action="/login">
                <div className="twos">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="User Name"
                  />
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Password"
                  />
                  <br />
                </div>
                <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
                <label htmlFor="keepSignedIn">Keep me signed in</label>
                <br />
              </form>
            </div>
            <div className="logins">
              <button>LOG IN</button>
            </div>
            <div className="forget">
              <p>FORGOT PASSWORD?</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={Home} alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
