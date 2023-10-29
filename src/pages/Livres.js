import React from "react";
import { useContext } from "react";
import { Livre } from "../components/Livre";
import { AppContext } from "../components/App";


export const Livres = () => {

   const {listeLivres} = useContext(AppContext);

   return (
      <div className="liste-livres">
      {
         listeLivres?.map((livre, key) => {
            return (
               <Livre key={key} livre={livre} />
            );
         })
      }
      </div>
   );
}