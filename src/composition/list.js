import React from 'react';
import Card from './Card'
import './List.css';

export default function List(prop){
    return (
 <section className="List">
    <header className="List-header">
        <h2>{prop.header}</h2>
    </header>
    <div className="List-cards">
        {prop.cards.map((card) =>
        <Card
            key={card.id}
            title={card.title}
            content={card.content}
            />
            )}
        <button
            type='button'
            className='List-add-button'
        >
            + Add Random Card
        </button>
    </div>
</section>
    )
}




