
import React, { useState } from "react";
import { TableStagiaire } from "./TableSatgiaire";

export const Main = () => {

   const [counter, setCounter] = useState(0);
   const [buttonColor, setButtonColor] = useState(false);
   const [buttonText, setButtontext] = useState('Afficher Liste Stagiaires');

   const listeAdmis = [
      ['CIN12', 'Karim', 'Karimi'],
      ['CIN12', 'Karim', 'Karimi'],
      ['CIN12', 'Karim', 'Karimi'],
      ['CIN12', 'Karim', 'Karimi'],
      ['CIN12', 'Karim', 'Karimi']
   ];

   const listeAttente = [
      ['CIN12Att', 'KarimAtt', 'KarimiAtt'],
      ['CIN12Att', 'KarimAtt', 'KarimiAtt'],
      ['CIN12Att', 'KarimAtt', 'KarimiAtt'],
      ['CIN12Att', 'KarimAtt', 'KarimiAtt'],
      ['CIN12Att', 'KarimAtt', 'KarimiAtt']
   ];

   const handleClick = (event) => {
      setCounter(counter + 1);
      switch (counter) {
         case 0:
            setButtonColor('lightblue');
            setButtontext("Afficher Liste d'attente")
            break;
         case 1:
            setButtonColor('lightgreen');
            setButtontext("Afficher Liste Stagiaires")
            break;
         default:
            setCounter(1);
            setButtontext("Afficher Liste d'attente")
            setButtonColor('lightblue');

      }
   }

   return (
      <div>
         <button style={{backgroundColor: buttonColor}} onClick={handleClick}>{buttonText}</button>
         { counter == 1 && <TableStagiaire data={listeAdmis} /> }
         { counter == 2 && <TableStagiaire data={listeAttente} /> }
      </div>
   );
}