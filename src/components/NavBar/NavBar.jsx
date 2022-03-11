import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "./NavBar.css";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logotext">
        <h1 className="logo__text">Ravishankar</h1>
      </div>
      <ul className="app__navbar-menuitems">
        <li className="app__navbar-menuitems_links">
          <a href="#home">Home</a>
        </li>
        <li className="app__navbar-menuitems_links">
          <a href="#about">About</a>
        </li>
        <li className="app__navbar-menuitems_links">
          <a href="#skills">Skills</a>
        </li>
        <li className="app__navbar-menuitems_links">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <div className="app__navbar-smallscreen_header">
          <div className="app__navbar-smallscreen_header-text">
            <h1 className="logo__text">Ravishankar</h1>
          </div>
          <GiHamburgerMenu
            fontSize={27}
            onClick={() => setToggleMenu(true)}
            className="hamburger__menu"
          />
        </div>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <div className="app__navbar-smallscreen_close">
              <AiOutlineClose
                fontSize={27}
                onClick={() => setToggleMenu(false)}
                className="close__menu"
              />
            </div>
            <ul className="app__navbar-smallscreen_menuitems">
              <li className="app__navbar-smallscreen_menuitems_links">
                <a href="#home">Home</a>
              </li>
              <li className="app__navbar-smallscreen_menuitems_links">
                <a href="#about">About</a>
              </li>
              <li className="app__navbar-smallscreen_menuitems_links">
                <a href="#skills">Skills</a>
              </li>
              <li className="app__navbar-smallscreen_menuitems_links">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
