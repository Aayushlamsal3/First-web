import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.hotel.png"


const Navbar=()=>{
    return(
        <>
<div className="my_nav">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <NavLink class="navbar-brand" to="/">
      <img src={Logo} alt="Bootstrap" width="70" height="50" style={{borderRadius:"100px"}} />
    </NavLink>
    <NavLink className="nav-link" id="topic"  to="/">I-yush</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Our Services</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
</div>

        </>
    )
}

export default Navbar;
