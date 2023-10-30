import React, { createContext } from "react";
import { Navbar } from "./Navbar";
import { Error } from "../pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export const AppContext = createContext();

const App = () => {
   
   return (
      <div className="App">
         {/* <AppContext.Provider value={{}}> */}
            <BrowserRouter>
               <div className="navbar">
                  <Navbar />
               </div>
               <div className="main">
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
