import React from 'react'
import './input.css'
function Input({ setinPut }) {

    function handleChange(e) {
        const input = e.target.value;
        setinPut(input)

    }

    return (
        <div className='inputBox'>
            <h3>Input:</h3>
            <textarea name='input' className='input' onChange={handleChange}>

            </textarea>
        </div>
    )
}

export default Input