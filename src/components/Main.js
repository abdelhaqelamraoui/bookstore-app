
import React, { useState } from "react";

export const Main = () => {

   const [matricule, setMatricule] = useState('');
   const [nomComplet, setNomComplet] = useState('');
   const [dateNaissance, setDateNaissance] = useState('');
   const [sexe, setSexe] = useState('');
   const [diplomes, setDiplomes] = useState([]);
   const [ville, setVille] = useState('');


   const handleMatriculeChange = (event) => {
      setMatricule(event.target.value);
   }


   const handleNomCompletChange = (event) => {
      setNomComplet(event.target.value);
   }


   const handleDateNaissanceChange = (event) => {
      setDateNaissance(event.target.value);
   }


   const handleSexeChange = (event) => {
      setSexe(event.target.value);
   }


   const handleDimplomesChange = (event) => {

      const dip = event.target.value;
      let newDiplomes = [];

      if(diplomes.includes(dip)) {
         newDiplomes = diplomes.filter(d => d !== dip)
      } else {
         newDiplomes = [...diplomes, dip]
      }

      setDiplomes(newDiplomes)
   }


   const handleVilleChange = (event) => {
      setVille(event.target.value)
   }


   const handleFormSubmit = (event) => {
      event.preventDefault();
      let msg = '';

      const states = {
         matricule: matricule,
         nomComplet: nomComplet,
         dateNaissance: dateNaissance,
         sexe: sexe,
         diplomes: diplomes,
         ville: ville
      }
      
      for (const key in states) {
         const element = states[key];
         const nomChmaps = key.charAt(0).toLocaleUpperCase() + key.substring(1)
         if(Array.isArray(element)) {
            msg += `${nomChmaps} : ${element.join(' - ')} `;
         } else {
            msg += `${nomChmaps} : ${element} `;            
         }
      }
      alert(msg);
   }


   return (
      <form className="w-50" onSubmit={handleFormSubmit}>
         <div className="mt-3">
            <label htmlFor="" className="form-label">Matricule</label>
            <input className="form-control" type="text" onChange={handleMatriculeChange}/>
         </div>
         <div className="mt-3">
            <label htmlFor="" className="form-label">Nom Complet</label>
            <input className="form-control" type="text" onChange={handleNomCompletChange}/>
         </div>
         <div className="mt-3">
            <label htmlFor="" className="form-label">Date de naissance</label>
            <input className="form-control" type="date" onChange={handleDateNaissanceChange}/>
         </div>
         <div className="mt-3 d-inline-flex gap-4 align-items-center">
            <label htmlFor="" className="">Sexe</label>
            <div className="d-inline-flex gap-2 align-items-center">
               <input className="form-check" type="radio" name="sexe" value="Homme" onChange={handleSexeChange}/>
               <label htmlFor="" className="">Masculin</label>
            </div>
            <div  className="d-inline-flex gap-2 align-items-center">
               <input className="form-check" type="radio" name="sexe" value="Femme" onChange={handleSexeChange}/>
               <label htmlFor="" className="">Feminin</label>
            </div>
         </div>
   
         <div className="mt-3">
            <label htmlFor="" className="form-label">Diplômes</label>
            <div>
               <div className="d-flex gap-2">
                  <input className="form-check" type="checkbox" value="Technicien" onChange={handleDimplomesChange}/>
                  <label htmlFor="" className="">Technicien</label>
               </div>      

               <div className="d-flex gap-2">
                  <input className="form-check" type="checkbox" value="Technicien Specialisé"onChange={handleDimplomesChange}/>
                  <label htmlFor="" className="">Technicien Specialisé</label>
               </div>

               <div className="d-flex gap-2">
                  <input className="form-check" type="checkbox" value="Licence"onChange={handleDimplomesChange}/>
                  <label htmlFor="" className="">Licence</label>
               </div>

               <div className="d-flex gap-2">
                  <input className="form-check" type="checkbox" value="Master"onChange={handleDimplomesChange}/>
                  <label htmlFor="" className="">Master</label>
               </div>

               <div className="d-flex gap-2">
                  <input className="form-check" type="checkbox" value="Ingénieur" onChange={handleDimplomesChange}/>
                  <label htmlFor="" className="">Ingénieur</label>
               </div>

               <div className="d-flex gap-2">
                  <input className="form-check" type="checkbox" value="Doctorat" onChange={handleDimplomesChange}/>
                  <label htmlFor="" className="">Doctorat</label>
               </div>
                  
            </div>
         </div>
   
         <div className="mt-3">
            <label htmlFor="" className="form-label">Ville</label>
            <select className="form-select" onChange={handleVilleChange}>
               <option value="Errachidia">Errachidia</option>
               <option value="Meknes">Meknes</option>
               <option value="Fes">Fes</option>
               <option value="Rabat">Rabat</option>
               <option value="Casablanca">Casablanca</option>
               <option value="Essaouira">Essaouira</option>
            </select>
         </div>
   
         <div className="text-center mt-4">
            <button className="btn btn-outline-success px-5">Submit</button>
         </div>
      </form>
   );


}
