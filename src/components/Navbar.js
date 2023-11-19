import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/icons/logo.png";
import darkModeIcon from "./../assets/icons/brightness-and-contrast.png";
import cartIcon from "./../assets/icons/shopping-cart.png";
import { AppContext } from "./App";

export const Navbar = () => {

   const [panier] = useContext(AppContext);

   const changeTheme = event => {

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

         <div className="d-flex align-items-between align-items-center gap-3">

            <button className="cart-button">
               <img src={cartIcon} alt="dark icon" />
               <div className="counter">
                  <span>{panier.length}</span>
               </div>
            </button>

            <button className="dark-button" onClick={changeTheme}>
               <img src={darkModeIcon} alt="dark icon" />
            </button>

            <Link to="/" className="d-flex justify-content-between align-items-center gap-3">
               <img src={logo} className="logo" alt="logo"/>
            </Link>
         </div>
      </nav>
   );
};
