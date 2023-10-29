import React, { Component } from "react";
import { Personne } from "./Personne";



export class Auteur extends Component {

   constructor(cin, nom, prenom, interets) {
      super();
      this.cin = cin;
      this.nom = nom;
      this.prenom = prenom;
      this.interets = interets;
   }

   render = () => {
      const auteur = this.props.auteur;
      return (
         <Personne cin={auteur.cin} nom={auteur.nom} prenom={auteur.prenom}  interets={auteur.interets}  />
      )
   }
}