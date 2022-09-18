import React, { useEffect } from 'react'
import { useState } from 'react';

import BeautifulScreen  from '../BeautifulScreen/BeautifulScreen'
import AmazingNumberButton from '../AmazingNumberButton/AmazingNumberButton';
import GreatOperationButton from '../GreatOperationButton/GreatOperationButton';

import './Calculator.css'
import ItSOverNineThousand from '../ItSOverNineThousand/ItSOverNineThousand';
import axios from 'axios';


export function Calculator() {

    const [nombre1, setNombre1] = useState([])
    const [nombre2, setNombre2] = useState([])
    const [operator, setOperator] = useState([])

    const [operation, setOperation] = useState()

    const [currentNombre, setCurrentNombre] = useState(false)

    const [stateResult, setStateResult] = useState(false)
    const [result, setResult] = useState()

    const handleSubmit = (nombre) => {

        if(currentNombre === false){
          setNombre1([...nombre1, nombre])
        } else if (currentNombre === true) {
          setNombre2([...nombre2, nombre])
        }


    }

    const handleSubmitOperator = (currentOperator) => {
      setOperator([...operator, currentOperator])
      setCurrentNombre(true)
    }

    const handleClear = () => {
      setNombre1([])
      setNombre2([])
      setOperator([])
      setCurrentNombre(false)
      setResult()
      setStateResult(false)
    }

    const handleCalcul = () => {

      switch (operator[0]){
        
        case '+' : 
          return (
            setStateResult(true),
            setResult(parseInt(nombre1.join('')) + parseInt(nombre2.join('')))
          )
        case "-" : 
          return (
            
            setStateResult(true),
            setResult(parseInt(nombre1.join('')) - parseInt(nombre2.join('')))
          )
        case "x" :
          return (
            setStateResult(true),
            setResult(parseInt(nombre1.join('')) * parseInt(nombre2.join('')))
          )
        case "÷" : 
          return (
            setStateResult(true),
            setResult(parseInt(nombre1.join('')) / parseInt(nombre2.join('')))
          )
      }
    }

    // const handleSave = (e) => {
    //   e.preventDefault()
      
    //   let formData = new FormData();

      
      
    //   if(result){
    //     setOperation(nombre1 + operator + nombre2)
    //     formData.append('result', result)
    //     formData.append('operation', operation) 
    //     for (const value of formData.values()) {
    //       console.log(value);
    //     }
    //     axios({
    //       method: 'post',
    //       url: 'http://localhost/Calculator/php/API/POST.php',
    //       data: formData,
    //       config: {headers: {'Content-Type' : 'multipart/form-data'}}
    //     })
    //     .then(function (response) {
    //       //handle success
    //       console.log(response)
    //       alert('New Contact Successfully Added.');  
    //     })
    //     .catch(function (response) {
    //         //handle error
    //         console.log(response)
    //     });
    //   }
    // }


  return (

    <main>
        <BeautifulScreen  
          nombre1={nombre1} 
          operator={operator}
          nombre2={nombre2} 
          stateResult={stateResult}
          result={result}
        />
        <ItSOverNineThousand result={result} />
        <section className='grid-template'>
          {/* <form method='post'   onSubmit={e => handleSave(e)}> */}
            <GreatOperationButton handleClickParentOperator={handleSubmitOperator} />
            <AmazingNumberButton handleClickParent={handleSubmit} />     
            <button type="submit" className="save" value="save"></button>
            <button type="button" className="all-clear" value="all-clear" onClick={handleClear}>AC</button>
            <button type="button" className="equal-sign" value="=" onClick={handleCalcul}>=</button>
            <input type='hidden' value={operation} name="operation"></input>
            <input type='hidden' value={result} name="result"></input>
          {/* </form> */}
        </section>
        
    </main>
  )
}