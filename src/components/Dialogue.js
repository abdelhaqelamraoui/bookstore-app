import React from "react";

import Dialogue, { InfoCollectees } from './StyledComponents';

export const InfoDialogue = (props) => {

   return (
      <DialogueContainer>
         <Dialogue>
            <h3>{props.title}</h3>
            <InfoCollectees info={props.info}/>
         </Dialogue>
      </DialogueContainer>
   );
}