import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";
import removeIcon from './../assets/icons/delete.png';

export const Panier = (key) => {

   const [panier, setPanier] = useContext(AppContext);
   const [totalPrice, setTotalPrice] = useState(0);

   const removeLivreFromCart = (key) => {
      setPanier(panier.filter((livre, index) => index !== key));
   }

   /**
    * updatiin the total every time the panier gets updated
    */
   useEffect(() => {
      // TODO : use reduce instead
      let tot = 0;
      for (const l of panier) {
         tot += l.price
      }
      setTotalPrice(tot);
   }, [panier]);
   
   return (

      <div className="panier">
         <div>
            <div className="liste-livres">
               {
                  panier.length === 0 ? <p className="text-center mt-2">Rien n'est ajouté </p>:
                  panier.map((livre, key) => {
                     return (
                        <div key={key} className="panier-row">
                           <div className="livre-titre">{livre.titre}</div>
                           <div className="livre-price">{livre.price} MAD</div>
                           <button className="remove-button" onClick={(event) => removeLivreFromCart(key)}>
                              <img src={removeIcon} alt="remove icon" />
                           </button>
                        </div>
                     );
                  })
               }
            </div>
            <div className="total">
               { totalPrice } MAD
            </div>

         </div>
      </div>
   );

}