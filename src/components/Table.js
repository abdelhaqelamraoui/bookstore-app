import React from "react";


export const Table = (props) => {
   return (
      <table>
         <thead>
            <tr>
               {
                  props.table['header'].map((th, key) => {
                     return (
                        <th key={key}>{th}</th>
                     );
                  })
               }
            </tr>
         </thead>
         <tbody>
         {
            props.table['data'].map((row, key1) => {
               return (
                  <tr key={key1}>
                     {
                        row.map((td, key) => {
                           return (
                              <td key={key}>{td}</td>
                           );
                        })
                     }
                  </tr>
               );
            })
         }
         </tbody>
      </table>
   );
}