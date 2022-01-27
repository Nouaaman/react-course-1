import React from 'react';
import './Card.css'

//Card interface
interface Card {
    id: number,
    title: string,
    description: string,
    creationDate: Date
}

//component
const Card = (props: Card) => {

    //destructuration de props
    const { id, title, description, creationDate } = props;

    return (
        <div className='Card' key={id} >
            <h4>{title}</h4>
            <p className='description' >{description}</p>
            <p className='date'>{creationDate}</p>
        </div>
    )
}

//export
export default Card;