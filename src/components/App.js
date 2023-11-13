import React, { createContext } from "react";
import { Navbar } from "./Navbar";
import { Error } from "../pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

import '../assets/css/App.css';


export const AppContext = createContext();

const App = () => {
   
   return (
      <div className="App">
         {/* <AppContext.Provider value={{}}> */}
            <BrowserRouter>
               <div className="navbar position-fixed bg-light py-2 top-0 w-100 px-4">
                  <Navbar />
               </div>
               <div className="main container">
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/*" element={<Error />} />
                  </Routes>
               </div>
            </BrowserRouter>
         {/* </AppContext.Provider> */}
      </div>
   );
};

export default App;
