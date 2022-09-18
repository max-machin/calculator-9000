import React from 'react'
import './BeautifulScreen.css'

 function BeautifulScreen({nombre1, operator, nombre2, stateResult, result}) {
  if(stateResult === true) {
    return (
      <div className='screenBase'>
        <div className='screen'>
          {
           result
          }
        </div>
        
      </div>
    )
  } else {
    return (
      <div className='screenBase'>
        <div className='screen'>
          {nombre1} {operator} {nombre2}
        </div>
        
      </div>
    )
  }
}

export default BeautifulScreen

