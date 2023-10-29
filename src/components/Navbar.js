import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
   return (
      <nav>
         <Link to="/">Liste des Livres</Link>
         <Link to="/add">Ajouter un Livre</Link>
      </nav>
   );
};
