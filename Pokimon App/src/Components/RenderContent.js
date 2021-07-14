import React from 'react';
import Card from './Card.js'
const RenderContent = (props)=>{
     const List = props.Data.map((obj,i)=>{
         i=i+1;
         let url = "https://pokeres.bastionbot.org/images/pokemon/"+i+'.png';
         return(
         <Card 
            text={obj.name.toUpperCase()}
            url={url}
         />
         );
     });
     return(
         <div>{List}</div>
     );
}
export default RenderContent;