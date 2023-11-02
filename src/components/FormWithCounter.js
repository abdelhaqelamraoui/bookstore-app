
import React from "react";
import { Component } from "react";


export class FormWithCounter extends Component {

   constructor(props) {
      
      super(props);
      /*
       * This instruction ensures that the 'this' inside this
       * function is the current object is not the html element
       * that receives the event.
       */
      this.handleSubmit = this.handleSubmit.bind(this);

   }

   handleSubmit(event) {
      event.preventDefault();
      console.log('Submitting form');
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit} method="GET">
            <button>Submit Form</button>
         </form>
      );
   }
}