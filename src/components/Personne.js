import React, { Component } from "react";


export class Personne extends Component {

   render = () => {

      return (
         <div className="personne">
            <div className="personne-header">
               <div>
                  <label htmlFor="">CIN</label>
                  <div>{this.props.cin}</div>
               </div>
               <div>
                  <label htmlFor="">Nom</label>
                  <div>{this.props.nom}</div>
               </div>
               <div>
                  <label htmlFor="">Prenom</label>
                  <div>{this.props.prenom}</div>
               </div>
            </div>
            <div className="personne-body">
               <p>Principaux domaines d'interêt:</p>
               <ol>
                  {
                     // if(this.this.props.interets > 0) {
                        this.props.interets.map((interet, key) => {
                           return (
                              <li key={key}>{interet}</li>
                           )
                        })
                     // }
                  }
               </ol>
            </div>
         </div>
      )

   }

}