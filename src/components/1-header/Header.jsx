import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="  flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      

      <nav>
        <ul className="flex">
        <li>
            <a href="/">Home</a>
          </li>
        <li>
            <a href="/#about">About</a>
          </li>

          
          <li>
            <a href="#project">Projects</a>
          </li>
         
          <li>
            <a href="/#contact">Contact</a>
          </li>

          
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
           
              <button
                className="icon-close  fa fa-times"
                onClick={() => {
                  setshowModal(false);
                }}
              ></button>
            </li>
            <li>
            <a href="/">Home</a>
          </li>
        <li>
            <a href="/#about">About</a>
          </li>

          
          <li>
            <a href="#project">Projects</a>
          </li>
         
          <li>
            <a href="/#contact">Contact</a>
          </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
