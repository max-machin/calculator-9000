import React from 'react'
import './ItSOverNineThousand.css'

function ItSOverNineThousand(result) {
    if (result.result > 9000){
        return (
            <div className='over-screen'>
                <b>It's over 9000 !!!</b>
            </div>
            
            )
    }

    console.log(result)
 
}

export default ItSOverNineThousand