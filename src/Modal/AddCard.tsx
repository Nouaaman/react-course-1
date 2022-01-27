import React, { useState } from 'react';
import './modal.css'
import { } from "module";

//component
const CreateCard = (props: any) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isValid, setIsValid] = useState(true)//form validation


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (title.trim().length > 0 && description.trim().length > 0) {//form validation
            props.onSubmit({
                id: Date.now(),
                title: title,
                description: description,
                creationDate: new Date().toLocaleString()
            })
            setDescription('')
            setTitle('')
            setIsValid(true)
            props.close()
        } else {
            setIsValid(false)
        }
    }


    if (!props.show) {
        return null
    }

    return (
        <div className='modal'>
            <div className='content'>
                <h3>Add Card</h3>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className='field'>
                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" onChange={e => setDescription(e.target.value)} />
                    </div>
                    {!isValid && (
                        <p className='color-red'>all fields must be filled in.</p>
                    )}
                    <div className='buttons'>
                        <button type='submit'>Add</button>
                        <button onClick={props.close}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

//export
export default CreateCard;
