import React, { Component } from "react";
import { Auteur } from "./Auteur";
import { Editeur } from "./Editeur";
import { Livre } from "./Livre";

class App extends Component {

   render() {
      const auteur = new Auteur("M45668", "Laroui", "Fouad", [
         "Calligraphie",
         "Reading",
         "Swimming",
      ]);

      const editeur = new Editeur("M45111", "Adele", "Guillard", [
         "Football",
         "Walking",
      ]);

      const livre = new Livre (
         "ISBN145877",
         "Plaidoyer pour les arabes",
         auteur,
         editeur,
         new Date("2023/04/27")
      );

      return (
         <div className="App">
            <Livre livre={livre} />
         </div>
      );
   }
}

export default App;
