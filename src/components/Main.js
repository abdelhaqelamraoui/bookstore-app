
import React, { Component } from "react";

export class Main extends Component {

   constructor(props) {
      super(props);
      this.state = {
         matricule: '',
         nomComplet: '',
         dateNaissance: '',
         sexe: '',
         diplomes: [],
         ville: ''
      };

      this.handleMatriculeChnage = this.handleMatriculeChnage.bind(this);
      this.handleNomCompletChnage = this.handleNomCompletChnage.bind(this);
      this.handleDateNaissanceChnage = this.handleDateNaissanceChnage.bind(this);
      this.handleSexeChnage = this.handleSexeChnage.bind(this);
      this.handleDimplomesChnage = this.handleDimplomesChnage.bind(this);
      this.handleVilleChnage = this.handleVilleChnage.bind(this);
   }

   handleMatriculeChnage = (event) => {
      this.setState({matricule: event.target.value})
   }

   handleNomCompletChnage = (event) => {
      this.setState({nomComplet: event.target.value})
   }

   handleDateNaissanceChnage = (event) => {
      this.setState({dateNaissance: event.target.value})
   }

   handleSexeChnage = (event) => {
      this.setState({sexe: event.target.value})
   }

   handleDimplomesChnage = (event) => {
      const dip = event.target.value;
      let newDiplomes = [];
      if(this.state.diplomes.includes(dip)) {
         newDiplomes = this.state.diplomes.filter(d => d != dip)
      } else {
         newDiplomes = [...this.state.diplomes, dip]
      }
      this.setState({diplomes: newDiplomes})
   }

   handleVilleChnage = (event) => {
      this.setState({ville: event.target.value})
   }

   handleFormSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
      let msg = '';
      for (const key in this.state) {
         if (Object.hasOwnProperty.call(this.state, key)) {
            const element = this.state[key];
            const nomChmaps = key.charAt(0).toLocaleUpperCase() + key.substring(1)
            if(Array.isArray(element)) {
               msg += `${nomChmaps} : ${element.join(' - ')} `;
            } else {
               msg += `${nomChmaps} : ${element} `;            
            }
         }
      }
      alert(msg);
   }

   render() {
      return (
         <form className="w-50" onSubmit={this.handleFormSubmit}>
            <div className="mt-3">
               <label htmlFor="" className="form-label">Matricule</label>
               <input className="form-control" type="text" onChange={this.handleMatriculeChnage}/>
            </div>
            <div className="mt-3">
               <label htmlFor="" className="form-label">Nom Complet</label>
               <input className="form-control" type="text" onChange={this.handleNomCompletChnage}/>
            </div>
            <div className="mt-3">
               <label htmlFor="" className="form-label">Date de naissance</label>
               <input className="form-control" type="date" onChange={this.handleDateNaissanceChnage}/>
            </div>
            <div className="mt-3 d-inline-flex gap-4 align-items-center">
               <label htmlFor="" className="">Sexe</label>
               <div className="d-inline-flex gap-2 align-items-center">
                  <input className="form-check" type="radio" name="sexe" value="Homme" onChange={this.handleSexeChnage}/>
                  <label htmlFor="" className="">Masculin</label>
               </div>
               <div  className="d-inline-flex gap-2 align-items-center">
                  <input className="form-check" type="radio" name="sexe" value="Femme" onChange={this.handleSexeChnage}/>
                  <label htmlFor="" className="">Feminin</label>
               </div>
            </div>
      
            <div className="mt-3">
               <label htmlFor="" className="form-label">Diplômes</label>
               <div>
                  <div className="d-flex gap-2">
                     <input className="form-check" type="checkbox" value="Technicien" onChange={this.handleDimplomesChnage}/>
                     <label htmlFor="" className="">Technicien</label>
                  </div>      

                  <div className="d-flex gap-2">
                     <input className="form-check" type="checkbox" value="Technicien Specialisé"onChange={this.handleDimplomesChnage}/>
                     <label htmlFor="" className="">Technicien Specialisé</label>
                  </div>

                  <div className="d-flex gap-2">
                     <input className="form-check" type="checkbox" value="Licence"onChange={this.handleDimplomesChnage}/>
                     <label htmlFor="" className="">Licence</label>
                  </div>

                  <div className="d-flex gap-2">
                     <input className="form-check" type="checkbox" value="Master"onChange={this.handleDimplomesChnage}/>
                     <label htmlFor="" className="">Master</label>
                  </div>

                  <div className="d-flex gap-2">
                     <input className="form-check" type="checkbox" value="Ingénieur" onChange={this.handleDimplomesChnage}/>
                     <label htmlFor="" className="">Ingénieur</label>
                  </div>

                  <div className="d-flex gap-2">
                     <input className="form-check" type="checkbox" value="Doctorat" onChange={this.handleDimplomesChnage}/>
                     <label htmlFor="" className="">Doctorat</label>
                  </div>
                     
               </div>
            </div>
      
            <div className="mt-3">
               <label htmlFor="" className="form-label">Ville</label>
               <select className="form-select" onChange={this.handleVilleChnage}>
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

}
