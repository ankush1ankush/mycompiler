import React from 'react'
import './Output.css'
function Output({ userOutput }) {
    return (
        <div className='outputBox'>
            <h3>Output:</h3>
            <textarea className='output' value={userOutput} disabled></textarea>
        </div>
    )
}

export default Output