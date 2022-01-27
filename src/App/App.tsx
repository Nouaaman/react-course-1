import React, { useState } from 'react';
import Card from '../Card/Card';
import List from '../List/List';
import AddCard from '../Modal/AddCard';
import AddList from "../Modal/AddList";
import { DragDropContext } from 'react-beautiful-dnd';

import './App.css'

//Create Data
// const card1 = {
//     id: 1,
//     title: 'todo1',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, mollitia. ',
//     creationDate: new Date().toLocaleString()
// }
// const card2 = {
//     id: 2,
//     title: 'todo2',
//     description: 'sit amet, consectetur adipisicing elit',
//     creationDate: new Date().toLocaleString()
// }
// const Lists = [list];


const todoList = {
    id: 1,
    title: 'Active',
    cards: [],
}
const completedList = {
    id: 2,
    title: 'Completed',
    cards: [],
}
const App = () => {
    const [lists, setLists] = useState<List[]>([todoList, completedList])
    const [showAddList, setShowAddList] = useState(false)
    const [showAddCard, setShowAddCard] = useState(false)

    const addList = (list: List) => {
        setLists(lists => [...lists, list])
    }

    const addCard = (card: Card) => {
        lists[0].cards = [...lists[0].cards, card]
    }


    return (
        <DragDropContext onDragEnd={() => { }}>
            <div className='container'>
                <h1>TODO List</h1>
                < div className='actions'>
                    <button onClick={() => setShowAddList(true)}>Add List</button>
                    <button onClick={() => setShowAddCard(true)}>Add Card</button>
                </div>
                <div className='lists'>
                    {lists.map((currentElement) =>
                        <List key={currentElement.id} id={currentElement.id} title={currentElement.title} cards={currentElement.cards} />
                    )}

                </div>
                <AddList onSubmit={addList} show={showAddList} close={() => setShowAddList(false)} />
                <AddCard onSubmit={addCard} show={showAddCard} close={() => setShowAddCard(false)} />
            </div>
        </DragDropContext>
    );
}
export default App;