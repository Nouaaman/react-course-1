import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import List from '../List/List';
import AddCard from '../Modal/AddCard';
import AddList from "../Modal/AddList";
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

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
    cards: []
}
const inProgressList = {
    id: 2,
    title: 'In progress',
    cards: []
}
const completedList = {
    id: 3,
    title: 'Completed',
    cards: []
}
const App = () => {
    const [lists, setLists] = useState<List[]>(() => {
        const savedData: any = localStorage.getItem("listsData");
        const Data = JSON.parse(savedData);
        return Data.length === 3 ? Data : [todoList, inProgressList, completedList];

    })
    const [showAddList, setShowAddList] = useState(false)
    const [showAddCard, setShowAddCard] = useState(false)

    //handle change on lists
    useEffect(() => {
        saveToStorage(lists)
    }, [lists]);


    //save data to local storage
    const saveToStorage = (data: List[]) => {
        localStorage.setItem("listsData", JSON.stringify(data)); console.log('saved to local');
    }

    //add new list to lists array
    const addList = (list: List) => {
        setLists(lists => [...lists, list])
    }

    //add new card to 'active' list 
    const addCard = (card: Card) => {
        setLists(
            lists.map((list, index) => (
                index === 0 ?
                    { ...list, cards: [...list.cards, card] }
                    : { ...list }
            ))
        )

    }
    //delete card on delete button click
    const handleDeleteCard = (idList: number, cardId: number) => {
        let tempLists = lists.filter((list) => {
            if (list.id === idList) {
                list.cards = list.cards.filter(card => card.id !== cardId)
                return list
            }
            else
                return list
        })
        setLists(tempLists)
    }
    //delete list on delete button click
    const handleDeleteList = (idList: number) => {

        setLists(
            lists.filter(list => list.id !== idList)
        )
    }


    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result

        if (!destination) return
        if (destination.droppableId === source.droppableId && destination.index === source.index) return

        let tempLists = lists
        let draggedCard: Card
        tempLists.forEach(list => {
            if (source.droppableId === list.id.toString()) {
                draggedCard = list.cards[source.index]
                list.cards.splice(source.index, 1)
            }
        });

        tempLists.forEach(list => {
            if (destination.droppableId === list.id.toString()) {
                list.cards.splice(destination.index, 0, draggedCard)
            }
        });

        setLists(
            lists.map((list, index) => (list = tempLists[index]))
        )
    }


    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='container'>
                <h1>TODO List</h1>
                < div className='actions'>
                    <button onClick={() => setShowAddCard(true)}>Add card</button>
                    <button onClick={() => setShowAddList(true)}>Add list</button>
                </div>
                <div className='lists'>
                    {lists.map((currentElement) =>
                        <List key={currentElement.id}
                            id={currentElement.id}
                            title={currentElement.title}
                            cards={currentElement.cards}
                            onDeleteCard={handleDeleteCard}
                            onDeleteList={handleDeleteList} />
                    )}

                </div>
                <AddList onSubmit={addList} show={showAddList} close={() => setShowAddList(false)} />
                <AddCard onSubmit={addCard} show={showAddCard} close={() => setShowAddCard(false)} />
            </div>
        </DragDropContext>
    )
}
export default App;