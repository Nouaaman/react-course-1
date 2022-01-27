import React from 'react';
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
        
        <div className='list' key={id}>
            <h2>{title}</h2>
            <div className='cards'>
                {cards.map((card) =>
                    <Card key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        creationDate={card.creationDate} />)}
            </div>
        </div>
    )
}

//export
export default List;