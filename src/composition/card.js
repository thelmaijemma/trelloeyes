import React from 'react';
import './Card.css';
// derived from list? - title content set there
export default function Card(prop){
    return(
<div className="Card">
           <button type="button">
               delete
            </button>
           <h3>
               {prop.title}
            </h3>
           <p>
               {prop.content}
           </p>
</div>
    )
}