import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/icons/logo.png"


export const Navbar = () => {

   const [isChecked, setIsChecked] = useState(false);

   const handleCheck = event => {
      if(localStorage.getItem('theme') === 'dark') {
         document.getElementById('root').className = '';
         localStorage.setItem('theme', 'light');
      } else {
         document.getElementById('root').className = 'dark';
         localStorage.setItem('theme', 'dark');
      }
   }


   return (
      <nav className="w-100 px-4 h-100 d-flex justify-content-between align-items-center">
         <Link to="/" className="fw-bold">Librairie DEVOWS</Link>
         <Link to="/" className="d-flex justify-content-between align-items-center gap-3">
            <div>
               <span className="fw-bold me-3">Mode Sombre</span>
               <input className="" type="checkbox" onClick={handleCheck} />
            </div>
            <img src={logo} className="logo" alt="logo"/>
         </Link>
      </nav>
   );
};
