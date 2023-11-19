import React, { createContext, useState } from "react";
import { Navbar } from "./Navbar";
import { Error } from "../pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

import '../assets/css/App.css';



export const AppContext = createContext();

const App = () => {


   const [panier, setPanier] = useState([]);


   document.getElementById('root').classList = localStorage.getItem('theme');
   
   return (
      <div className="App">
         <AppContext.Provider value={[panier, setPanier]}>
            <BrowserRouter>
               <div className="navbar position-fixed bg-light py-2 px-4 top-0 w-100">
                  <Navbar />
               </div>
               <div className="main container">
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/*" element={<Error />} />
                  </Routes>
               </div>
            </BrowserRouter>
         </AppContext.Provider>
      </div>
   );
};

export default App;
