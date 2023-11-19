import React from "react";
import addToCartIcon from './../assets/icons/add-to-cart.png';

const addToCart = (event) => {
   event.target.setAttribute('disabled', true);
   event.target.className = 'disabled';
}

export const Livre = (props) => {
   const livre = props.livre;
   const POUCENTAGE = 10 / 100;
   const oldPrice = Math.round(livre.price + livre.price * POUCENTAGE);


   return (
      <div className="livre">
         <img className="image" src={livre.image} alt="book thumbnail" />
         <div className="infos">
            <h5 className="titre">{livre.titre}</h5>
            <div className="details">
               <div>
                  <label>Auteur</label>
                  <div>{livre.auteur}</div>
               </div>
               <div>
                  <label>Editeur</label>
                  <div>{livre.editeur}</div>
               </div>
               <div>
                  <label>Date d'Edition</label>
                  <div>{livre.dateEdition.toISOString().split('T').at(0)}</div>
               </div>
            </div>
            <div className="purchase-info">
               <div className="prices">
                  <span className="old-price">{oldPrice} MAD</span>
                  <span className="new-price">{livre.price} MAD</span>
               </div>
               <button onClick={addToCart} className="add-to-card-button">
                  <img src={addToCartIcon} alt="add to cart icon" />
               </button>
            </div>
         </div>
      </div>
   );
}