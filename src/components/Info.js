import React from "react";
import { InfoCollectees, Label } from "./StyledComponents";
import styles from './../assets/css/styles.module.css';

export const Info = (props) => {

   const info = props.info;

   return (
      <InfoCollectees>
         <div className={styles.twoColumns}>
            <Label>Matricule</Label>
            <span>{info.matricule}</span>
         </div>
         <div className={styles.twoColumns}>
            <Label>Nom Complet</Label>
            <span>{info.nomComplet}</span>
         </div>
         <div className={styles.twoColumns}>
            <Label>Date de naissance</Label>
            <span>{info.dateNaissance}</span>
         </div>
         <div className={styles.twoColumns}>
            <Label>Sexe</Label>
            <span>{info.sexe}</span>
         </div>
         <div className={styles.twoColumns}>
            <Label>Diplomes</Label>
            <span>{info.diplomes.join(', ')}</span>
         </div>
         <div className={styles.twoColumns}>
            <Label>Ville</Label>
            <span>{info.ville}</span>
         </div>
      </InfoCollectees>
   );
}