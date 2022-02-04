import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card/Card';
import "./List.css";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface List {
    id: number,
    title: string,
    cards: any[],
    onDeleteCard(listId: number, cardId: number): void;
    onDeleteList(listId: number): void;
    onEditCard(cardId: number, newTitle: string, newDescription: string, listId: number): void

};


//component
const List = (props: List) => {

    //props
    const { id, title, cards } = props;
    function handleDeleteCard(cardId: number) {
        props.onDeleteCard(id, cardId)
    }
    function handleEditCard(cardId: number, newTitle: string, newDescription: string) {
        props.onEditCard(cardId, newTitle,newDescription,id)
    }

    return (

        <div className='list' key={id} >
            <h3>
                {title}
                <div className='actions'>
                    {id > 3 &&
                        <button className='delete' onClick={() => props.onDeleteList(id)}>
                            <img src={'/assets/icon-close.png'} />
                        </button>}
                </div></h3>
            <Droppable droppableId={id.toString()}>
                {(provided) => (
                    <div className='cards' ref={provided.innerRef}>
                        {cards.map((card, index) =>
                            <Card key={card.id}
                                index={index}
                                id={card.id}
                                title={card.title}
                                description={card.description}
                                creationDate={card.creationDate}
                                onDeleteCard={handleDeleteCard}
                                onEditCard={handleEditCard} />)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>

    )
}

//export
export default List;