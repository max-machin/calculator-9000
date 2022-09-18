import React, { useState } from 'react'
import './AmazingNumberButton.css'


function AmazingNumberButton(props) {

    var handleClick = (e) => {
        props.handleClickParent(parseFloat(e.target.value))
    }

    var handleClickDec = (e) => {
        props.handleClickParent(e.target.value)
    }

    const number = [9, 8, 7, 6, 5, 4, 3, 2, 1]
   
    return (
        <>
            {
                number.map((number) => {
                    return <button className={`number${number}`} value={number} onClick={handleClick}>{number}</button>
                })
            }
            <button type="button" className="decimal" value="." onClick={handleClickDec}>.</button>
            <button className='zero' value={0} onClick={handleClick}>0</button>
        </>
    )
}


export default AmazingNumberButton