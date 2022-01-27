import React from 'react';
import './modal.css';

//component
const CreateList = (props: any) => {

    if (!props.show) {
        return null
    }

    return (
        <div className='modal'>
            <div className='content'>
                <h3>Create List</h3>
                <div className='form'>
                    <div className='field'>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" />
                    </div>
                    <button onClick={props.close}>Create</button>
                </div>
            </div>
        </div>

    )
}

//export
export default CreateList;