import React, { createContext, useState } from "react";
import { Auteur } from "./Auteur";
import { Editeur } from "./Editeur";
import { Livre } from "./Livre";
import { Navbar } from "./Navbar";
import { AddLivre } from "../pages/AddLivre";
import { Livres } from "../pages/Livres";
import { Error } from "../pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppContext = createContext();

const App = () => {

   const auteur = new Auteur("M45668", "Laroui", "Fouad", [
      "Calligraphie",
      "Reading",
      "Swimming",
   ]);

   const editeur = new Editeur("M45111", "Adele", "Guillard", [
      "Football",
      "Walking",
   ]);

   const livre = new Livre(
      "ISBN145877",
      "Plaidoyer pour les arabes",
      auteur,
      editeur,
      new Date("2023/04/27")
   );

   const [listeLivres, setListeLivres] = useState([livre]);
   
   return (
      <div className="App">
         <AppContext.Provider value={{ listeLivres, setListeLivres }}>
            <BrowserRouter>
               <div className="navbar">
                  <Navbar />
               </div>
               <div className="main">
                  <Routes>
                     <Route path="/" element={<Livres />} />
                     <Route path="/add" element={<AddLivre />} />
                     <Route path="/*" element={<Error />} />
                  </Routes>
               </div>
            </BrowserRouter>
         </AppContext.Provider>
      </div>
   );
};

export default App;
