import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css'

//Card interface
interface Card {
    id: number,
    title: string,
    description: string,
    creationDate: Date
}

//component
const Card = (props: any) => {

    //destructuration de props
    const { index, id, title, description, creationDate } = props;

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {
                (provided) => (
                    <div className='Card' key={id} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                        <h4>{title}</h4>
                        <p className='description' >{description}</p>
                        <p className='date'>{creationDate}</p>
                    </div>
                )
            }

        </Draggable>
    )
}

//export
export default Card;