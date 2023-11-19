import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/icons/logo.png";
import darkModeIcon from "./../assets/icons/brightness-and-contrast.png";

export const Navbar = () => {


   const chnageTheme = event => {

      const root = document.getElementById('root');
      const theme = localStorage.getItem('theme');

      if( theme === 'dark') {
         root.className = '';
         localStorage.setItem('theme', 'light');
      } else {
         root.className = 'dark';
         localStorage.setItem('theme', 'dark');
      }
   }


   return (
      <nav className="w-100 d-flex justify-content-between align-items-center">
         <Link to="/" className="fw-bold">Librairie DEVOWS</Link>
         <Link to="/" className="d-flex justify-content-between align-items-center gap-3">
            <div>
               <button className="dark-button" onClick={chnageTheme}>
                  <img src={darkModeIcon} alt="dark icon" />
               </button>
            </div>
            <img src={logo} className="logo" alt="logo"/>
         </Link>
      </nav>
   );
};
