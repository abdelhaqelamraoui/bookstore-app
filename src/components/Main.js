
import React from "react";
import { Livre } from "./Livre";
import imgLivre1 from "../assets/img/livre-1.png";
import imgLivre2 from "../assets/img/livre-2.png";
import imgLivre3 from "../assets/img/livre-3.png";
import imgLivre4 from "../assets/img/livre-4.png";

export const Main = () => {
   
   let data = [

      {
         image: imgLivre1,
         titre: "Les tribulations du dernier Sijilmassi",
         auteur: "Fouad El Aroui",
         editeur: "Juliard",
         dateEdition: new Date(),
         price: 120
      },
      {
         image: imgLivre2,
         titre: "30 jours pour trouver un mari",
         auteur: "Fouad El Aroui",
         editeur: "Juliard",
         dateEdition: new Date(),
         price: 80
      },
      {
         image: imgLivre3,
         titre: "Plaidoyer pour les Arabes",
         auteur: "Fouad El Aroui",
         editeur: "Juliard",
         dateEdition: new Date(),
         price: 110
      },
      {
         image: imgLivre4,
         titre: "Une année chez les Français",
         auteur: "Fouad El Aroui",
         editeur: "Juliard",
         dateEdition: new Date(),
         price: 90
      },
      
   ];

   data = data.concat(data);
   data = data.concat(data);
   data = data.concat(data);


   return (
      <div className="">
         <h4 className="mb-3">Les livres disponibles</h4>
         <div className="grid-container">
         {
            data.map((livre, key) => {
               return <Livre key={key} livre={livre} />
            })
         }
         </div>
      </div>
   );


}
