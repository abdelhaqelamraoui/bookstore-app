import React from "react";
import { Table } from "./Table";


export const TableStagiaire = (props) => {
   
   const table = {
      'header': [ "CIN", "Nom", "Prenom" ],
      'data': props.data
   };

   return (
      <Table table={table} />
   );
}