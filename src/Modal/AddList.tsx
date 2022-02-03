
import React, { useState } from 'react';
import './modal.css';

//component
const AddList = (props: any) => {

    const [title, setTitle] = useState('')
    const [isValid, setIsValid] = useState(true)//form validation


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (title.trim().length > 0) {//form validation
            props.onSubmit({
                id: Date.now(),
                title: title,
                cards: []
            })
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
                <h3>Add List</h3>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" autoFocus onChange={e => setTitle(e.target.value)} />
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
export default AddList;