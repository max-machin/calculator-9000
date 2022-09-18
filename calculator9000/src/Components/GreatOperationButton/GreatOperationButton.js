import React from 'react'

import './GreatOperationButton.css'

function GreatOperationButton(props) {

    function handleClick(e){
        props.handleClickParentOperator(e.target.value)
    }
 
    const operator = ['+','-','x', '÷',]
    return (
        <>
        {
            operator.map((item, index) => {
                return (
                    <button 
                        className="operator" 
                        value={item}
                        onClick={handleClick}
                        >
                        {item}
                    </button>
                )
            })
           
        }
        </>
    )
}

export default GreatOperationButton