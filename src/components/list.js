import React from 'react';
import Card from './card'
import './list.css';

export default function List(props) {
 
    if (props.header && props.cards){
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
           {props.cards.map((card) =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onClickDelete={props.onClickDelete}
          />
        )}
              
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.addItem(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
} else {
    return null;
}
}




List.defaultProps = {
  onClickAdd: () => {},
}