import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card/Card';
import "./List.css";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface List {
    id: number,
    title: string,
    cards: any[],
};


//component
const List = (props: List) => {

    //props
    const { id, title, cards } = props;

    return (
        <Droppable droppableId={id.toString()}>
            {(provided) => (
                <div className='list' key={id} ref={provided.innerRef}>
                    <h2>{title}</h2>
                    <div className='cards'>
                        {cards.map((card, index) =>
                            <Card key={card.id}
                                index={index}
                                id={card.id}
                                title={card.title}
                                description={card.description}
                                creationDate={card.creationDate} />)}
                        {provided.placeholder}
                    </div>

                </div>

            )}
        </Droppable>
    )
}

//export
export default List;