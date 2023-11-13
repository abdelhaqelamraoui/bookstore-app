import React from "react";


export const Livre = (props) => {
   const livre = props.livre

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
         </div>
      </div>
   );
}