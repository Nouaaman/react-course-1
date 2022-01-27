import React from 'react';
import './modal.css'
import {  } from "module";
//component
const CreateCard = (props: any) => {

    if (!props.show) {
        return null
    }

    return (
        <div className='modal'>
            <div className='content'>
                <h3>Create Card</h3>
                <div className='form'>
                    <div className='field'>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" />
                    </div>
                    <div className='field'>
                        <label htmlFor="description">description</label>
                        <input type="text" id="description" />
                    </div>
                    <button onClick={props.close}>Create</button>
                </div>
            </div>
        </div>

    )
}

//export
export default CreateCard;
