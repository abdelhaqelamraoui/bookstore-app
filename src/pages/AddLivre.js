import React from "react";

import { useContext, useState } from "react";
import { AppContext } from "../components/App";
import { useNavigate } from "react-router-dom";


export const AddLivre = () => {
   const [newLivre, setNewLivre] = useState({});
   const [newAuteur, setNewAuteur] = useState({});
   const [newEditeur, setNewEditeur] = useState({});

   const { listeLivres, setListeLivres } = useContext(AppContext);
   
   const navigate = useNavigate();

   const addLivre = () => {
      console.log('Trying to add newLivre...');

      setListeLivres([
         ...listeLivres,
         {
            ...newLivre,
            auteur: newAuteur,
            editeur: newEditeur
         }
      ]);

      
      navigate('/'); // going to home page
   };

   return (
      <form className="add-livre" onSubmit={addLivre}>
         <table>
            <thead>
               <tr>
                  <th colSpan={2} className="center-text">
                     Ajouter un Livre
                  </th>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <th> Livre </th>
                  <td>
                     <div className="info-row">
                        <label>ISBN</label>
                        <input
                           type="text"
                           onChange={(e) =>
                              setNewLivre({ ...newLivre, isbn: e.target.value })
                           }
                        required/>
                     </div>
                     <div className="info-row">
                        <label>Titre</label>
                        <input
                           type="text"
                           onChange={(e) =>
                              setNewLivre({ ...newLivre, titre: e.target.value })
                           }
                        required/>
                     </div>
                     <div className="info-row">
                        <label>Date d'édition</label>
                        <input
                           type="date"
                           onChange={(e) =>
                              setNewLivre({
                                 ...newLivre,
                                 dateEdition: new Date(e.target.value),
                              })
                           }
                        required/>
                     </div>
                  </td>
               </tr>

               <tr>
                  <th>Auteur</th>
                  <td>
                     <div className="info-row">
                        <label>CIN</label>
                        <input
                           type="text"
                           onChange={(e) =>
                              setNewAuteur({ ...newAuteur, cin: e.target.value })
                           }
                        required/>
                     </div>
                     <div className="info-row">
                        <label>Nom</label>
                        <input
                           type="text"
                           onChange={(e) =>
                              setNewAuteur({ ...newAuteur, nom: e.target.value })
                           }
                        required/>
                     </div>
                     <div className="info-row">
                        <label>Prenom</label>
                        <input
                           type="text"
                           onChange={(e) =>
                              setNewAuteur({ ...newAuteur, prenom: e.target.value })
                           }
                        required/>
                     </div>
                     <div className="info-row">
                        <label>Interêts</label>
                        <textarea
                           placeholder="Football, Ecriture, Golf.."
                           onChange={(e) =>
                              setNewAuteur({
                                 ...newAuteur,
                                 interets: e.target.value.split(","),
                              })
                           }
                        ></textarea>
                     </div>
                  </td>
               </tr>

               <tr>
                  <th>Editeur</th>
                  <td>
                     <div className="info-row">
                        <label>CIN</label>
                        <input
                           type="text"
                           onChange={(e) =>
                              setNewEditeur({ ...newEditeur, cin: e.target.value })
                           }
                        />
                     </div>
                     <div className="info-row">
                        <label>Nom</label>
                        <input
                           type="text"
                           onChange={(e) =>
                              setNewEditeur({ ...newEditeur, nom: e.target.value })
                           }
                        />
                     </div>
                     <div className="info-row">
                        <label>Prenom</label>
                        <input
                           type="text"
                           onChange={(e) =>
                              setNewEditeur({ ...newEditeur, prenom: e.target.value })
                           }
                        />
                     </div>
                     <div className="info-row">
                        <label>Interêts</label>
                        <textarea
                           placeholder="Football, Ecriture, Golf.."
                           onChange={(e) =>
                              setNewEditeur({
                                 ...newEditeur,
                                 interets: e.target.value.split(","),
                              })
                           }
                        ></textarea>
                     </div>
                  </td>
               </tr>

               <tr>
                  <td colSpan={2} className="center-text">
                     <button type="submit">Ajouter Livre</button>
                  </td>
               </tr>
            </tbody>
         </table>
      </form>
   );
};
