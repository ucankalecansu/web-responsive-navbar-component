import React, { useState } from "react";
import "./navbar.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  const removeNavBar = () => {
    setActive("navBar");
  };

  //başlığa arka plan rengi ekleme
  const [activeHeader, setActiveHeader] = useState("header");

  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };

  window.addEventListener("scroll", addBg);
  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">LOGO</a>
        </h1>
      </div>

      <div className={active}>
        <ul onClick={removeNavBar} className="navLists">
          <li className="navItem">
            <a className="navLink" href="#about">
              <span className="headerNumber"> 1.</span>Hakkımda
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#skills">
              <span className="headerNumber"> 2.</span>Beceriler
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#projects">
              <span className="headerNumber"> 3.</span>Projeler
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#contact">
              <span className="headerNumber"> 4.</span>İletişim
            </a>
          </li>
          <button className="btn">
            <a href="YOUR_CV" download="YOUR_CV">
              Özgeçmiş
            </a>
          </button>
        </ul>
        <div onClick={removeNavBar} className="closeNavBar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div onClick={showNavBar} className="toggleNavBar">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
