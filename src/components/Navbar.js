import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/icons/logo.png"

export const Navbar = () => {
   return (
      <nav className="w-100 px-4 h-100 d-flex justify-content-between align-items-center">
         <Link to="/" className="fw-bold">Librairie DEVOWS</Link>
         <Link to="/">
            <img src={logo} className="logo" alt="logo"/>
         </Link>
      </nav>
   );
};
