import React, { Component } from "react";
import { Auteur } from "./Auteur";
import { Editeur } from "./Editeur";

export class Livre extends Component{

   constructor(isbn, titre, auteur, editeur, dateEdition) {
      super()
      this.isbn = isbn
      this.titre = titre
      this.auteur = auteur
      this.editeur = editeur
      this.dateEdition = dateEdition
   }

   render = () => {
      const livre = this.props.livre
      return (
         <div className="livre">
            <table>
               <tbody>
                  <tr>
                     <th>ISBN</th>
                     <td>{livre.isbn}</td>
                  </tr>
                  <tr>
                     <th>Titre</th>
                     <td>{livre.titre}</td>
                  </tr>
                  <tr>
                     <th>Auteur</th>
                     <td>
                        <Auteur auteur={livre.auteur} />
                     </td>
                  </tr>
                  <tr>
                     <th>Editeur</th>
                     <td>
                        <Editeur editeur={livre.editeur} />
                     </td>
                  </tr>
                  <tr>
                     <th>Date d'édition</th>
                     <td>
                        {livre.dateEdition.toISOString().split('T')[0]}
                     </td>
                  </tr>
               </tbody>

            </table>
         </div>
      )
   }

}

