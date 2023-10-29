import React, { Component } from "react";
import { Personne } from "./Personne";



export class Editeur extends Component {

   constructor(cin, nom, prenom, interets) {
      super()
      this.cin = cin
      this.nom = nom
      this.prenom = prenom
      this.interets = interets
   }

   render = () => {
      const editeur = this.props.editeur
      return (
         <Personne cin={editeur.cin} nom={editeur.nom} prenom={editeur.prenom} interets={editeur.interets} />
      )
   }
}