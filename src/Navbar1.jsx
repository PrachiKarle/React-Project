import React from "react";
import { NavLink } from "react-router-dom";

const navItem = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Service",
    path: "/service",
  },
  {
    title:"Portfolio",
    path:"/portfolio",
  },
  {
    title:"Our App",
    path:"/ourapp",
  },
  {
    title:"App Cost Calculator",
    path:"/appcost",
  },
];

const Navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light p-3" id="nav">

        <NavLink to="/" className="navbar-brand">
          <img src="images/logo.png" className="img-fluid" alt="" />
        </NavLink>
        
        <button
          className="navbar-toggler"
          data-bs-target="#navid"
          data-bs-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navid">
          <ul className="navbar-nav">
            {navItem.map((val) => {
              return (
                <>
                  <li className="nav-item">
                    <NavLink to={val.path} className="nav-link">
                      {val.title}
                    </NavLink>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
