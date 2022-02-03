import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css'

//Card interface
interface Card {
    id: number,
    title: string,
    description: string,
    creationDate: Date,
    index: number,
    onDeleteCard(id: number): void;

}

//component
const Card = (props: Card) => {

    //destructuration de props
    const { index, id, title, description, creationDate } = props;
    const [isEditable, setIsEditable] = useState(false)

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {
                (provided) => (
                    <div className='Card' key={id} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >

                        {!isEditable && (
                            <div className='actions'>
                                <button className='edit'
                                    onClick={() => setIsEditable(!isEditable)}>
                                    <img src={'/assets/icon-edit.png'} />
                                </button>

                                <button className='delete'
                                    onClick={() => props.onDeleteCard(id)}>
                                    <img src={'/assets/icon-close.png'} />
                                </button>
                            </div>
                        )}
                        {isEditable && (
                            <div className='actions'>
                                <button className='editDone' onClick={() => setIsEditable(!isEditable)}>
                                    <img src={'/assets/icon-done.png'} />
                                </button>
                            </div>
                        )}

                        <h4 contentEditable={isEditable} className={isEditable ? 'editable' : ''}>{title}</h4>
                        <p contentEditable={isEditable} className={isEditable ? 'editable' : ''}>{description}</p>
                        <p className='date'>{creationDate}</p>
                    </div>
                )
            }

        </Draggable>
    )
}
//edit

//export
export default Card;