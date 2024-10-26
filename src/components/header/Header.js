import React from "react";
import Button from "react-bootstrap/Button";
import "./Header.css"; // Importiere die CSS-Datei

function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__option">
          <div className="header__buttonsLeft">
            <Button
              className="header__log"
              variant="outline-dark"
              size="lg"
              style={{
                color: "black",
                borderColor: "black",
                borderWidth: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "black";
              }}
            >
              profilname@gmail.com {/* Or Get Started*/}
            </Button>
          </div>
          <div className="header__buttonsMiddle">
            <Button
              className="header__listButton"
              variant="outline-dark"
              size="lg"
              style={{
                color: "black",
                backgroundColor: "white",
                borderWidth: "3px",
                borderColor: "white",
              }}
            >
              Your Weekly Statistic
            </Button>
            <div className="header__dot__divider">
              <i className="bi bi-dot"></i>
            </div>
            <Button
              className="header__listButton"
              variant="outline-dark"
              size="lg"
              style={{
                color: "black",
                backgroundColor: "white",
                borderWidth: "3px",
                borderColor: "white",
              }}
            >
              Build your Friend
            </Button>
          </div>
          <div className="header__buttonsRight">
            <Button
              className="header__log"
              variant="outline-dark"
              size="lg"
              style={{
                color: "black",
                backgroundColor: "#f4f4f4",
                borderWidth: "3px",
                borderColor: "#f4f4f4",
              }}
            >
              Sign In {/* Or Sign Out*/}
            </Button>
            <Button
              className="header__start__setting"
              variant="outline-dark"
              size="lg"
              style={{
                color: "black",
                borderColor: "black",
                borderWidth: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "black";
              }}
            >
              Get Started {/* Or Settings*/}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
