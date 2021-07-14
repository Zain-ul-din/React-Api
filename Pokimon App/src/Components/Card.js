import React from 'react';
import './Card.css'
const Card = (props)=>{
   return(
      <div className='Card'>
            <img src={props.url} alt='poki Images'/>
            <p>{props.text}</p>
      </div>
   );
}

export default Card;