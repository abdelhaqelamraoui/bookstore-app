
import React, { useState } from "react";
import { Button, DialogueContainer, H2, Input, Label} from "./StyledComponents";
import { Info } from "./Info";
import registered from "./../assets/icons/registered.png"

export const Main = () => {

   const [matricule, setMatricule] = useState('');
   const [nomComplet, setNomComplet] = useState('');
   const [dateNaissance, setDateNaissance] = useState('');
   const [sexe, setSexe] = useState('');
   const [diplomes, setDiplomes] = useState([]);
   const [ville, setVille] = useState('');
   const [info, setInfo] = useState({});
   const [afficher, setAfficher] = useState(false);


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
      setInfo({
         'matricule': matricule,
         'nomComplet': nomComplet,
         'dateNaissance': dateNaissance,
         'sexe': sexe,
         'diplomes': diplomes,
         'ville': ville
      })
      setAfficher(true);
   }


   return (
      <form className="w-50 bg-light p-4 border border-2 rounded rounded-3" onSubmit={handleFormSubmit}>
         <div className="d-flex justify-content-between">
            <H2 className="title">Gestion des Employés</H2>
            <img className="icon" src={registered} />
            {/* <img className="icon" src="asstes/icons/registered.png" /> */}
         </div>
         
         <div className="mt-3">
            <Label htmlFor="" className="form-Label">Matricule</Label>
            <Input className="form-control" type="text" onChange={handleMatriculeChange}/>
         </div>
         <div className="mt-3">
            <Label htmlFor="" className="form-Label">Nom Complet</Label>
            <Input className="form-control" type="text" onChange={handleNomCompletChange}/>
         </div>
         <div className="mt-3">
            <Label htmlFor="" className="form-Label">Date de naissance</Label>
            <Input className="form-control" type="date" onChange={handleDateNaissanceChange}/>
         </div>
         <div className="mt-3 d-inline-flex gap-4 align-items-center">
            <Label htmlFor="" className="">Sexe</Label>
            <div className="d-inline-flex gap-2 align-items-center">
               <Input className="form-check" type="radio" name="sexe" value="Homme" onChange={handleSexeChange}/>
               <Label htmlFor="" className="">Masculin</Label>
            </div>
            <div  className="d-inline-flex gap-2 align-items-center">
               <Input className="form-check" type="radio" name="sexe" value="Femme" onChange={handleSexeChange}/>
               <Label htmlFor="" className="">Feminin</Label>
            </div>
         </div>
   
         <div className="mt-3">
            <Label htmlFor="" className="form-Label">Diplômes</Label>
            <div>
               <div className="d-flex gap-2">
                  <Input className="form-check" type="checkbox" value="Technicien" onChange={handleDimplomesChange}/>
                  <Label htmlFor="" className="">Technicien</Label>
               </div>      

               <div className="d-flex gap-2">
                  <Input className="form-check" type="checkbox" value="Technicien Specialisé"onChange={handleDimplomesChange}/>
                  <Label htmlFor="" className="">Technicien Specialisé</Label>
               </div>

               <div className="d-flex gap-2">
                  <Input className="form-check" type="checkbox" value="Licence"onChange={handleDimplomesChange}/>
                  <Label htmlFor="" className="">Licence</Label>
               </div>

               <div className="d-flex gap-2">
                  <Input className="form-check" type="checkbox" value="Master"onChange={handleDimplomesChange}/>
                  <Label htmlFor="" className="">Master</Label>
               </div>

               <div className="d-flex gap-2">
                  <Input className="form-check" type="checkbox" value="Ingénieur" onChange={handleDimplomesChange}/>
                  <Label htmlFor="" className="">Ingénieur</Label>
               </div>

               <div className="d-flex gap-2">
                  <Input className="form-check" type="checkbox" value="Doctorat" onChange={handleDimplomesChange}/>
                  <Label htmlFor="" className="">Doctorat</Label>
               </div>
                  
            </div>
         </div>
   
         <div className="mt-3">
            <Label htmlFor="" className="form-Label">Ville</Label>
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
            <Button className="btn btn-outline-success px-5 mb-5">Submit</Button>
         </div>
         {afficher && <Info info={info} />}
         {/* {afficher && <InfoDialogue title={"Infos"} info={info} />} */}
      </form>
   );


}
