import React, { useState } from "react";
import nav from "./nav.module.scss";
import logo from "./logo-white.svg";
import { RiArrowDownSLine } from "react-icons/ri";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={nav.header}>
        <img className={nav.logo} src={logo} alt="logo"></img>
        <nav>
          <ul className={nav.links}>
            <li>
              <a href="/h">Products</a>
              <RiArrowDownSLine color="rgba(255, 255, 255, 0.8)" size={20} />
            </li>
            <li>
              <a href="/c">Company</a>
              <RiArrowDownSLine color="rgba(255, 255, 255, 0.8)" size={20} />
            </li>
            <li>
              <a href="/s">Supports</a>
            </li>
          </ul>
        </nav>
        <button>
          <a href="/d">Download</a>
        </button>
        {/*hamburber*/}
        <div onClick={() => setActive(!active)} className={nav.wrapper}>
          <div className={active ? nav.activeHamburger : nav.hamburger} />
        </div>
      </div>

      {/*SideBar
                   <div className={active ? nav.activeSidenav : nav.sidenav}>
        <ul className={nav.links}>
          <li>
            <a href="/h">Products</a>
            <RiArrowDownSLine color="rgba(255, 255, 255, 0.8)" size={20} />
          </li>
        </ul>
      </div>
      */}
    </>
  );
}

export default Navbar;
