import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import {Calculator} from './Components/Calculator/Calculator'


function App() {

  

  const [fetching, setFetching] = useState()

  useEffect(() => {
    const url = "http://127.0.0.1/Calculator/php/API/BDD.php"
    axios.get(url)
    .then((data) => {
      setFetching(data.data)
    })
  }, [])

  function TheTitle({titre}){
    return (
      <h1 className='title'>
        {titre}
      </h1>
    )
  }

  return (
    <div className="App">
      <section>
        <h2>Historique des calculs</h2>
        {
          fetching ? 
          fetching.map((item) => {
            console.log(item)
            return (
              <div className='calcul-row'>
                <p>Numéro : {item[0]}</p>
                <p>Opération : {item[2]}</p>
                <p>Résultat : {item[1]}</p>
              </div>
            )
          })
          : ""
        }
      </section>
       
      <section className='calculator'>
        <TheTitle titre={"Calculator 9000"} />
        <Calculator />
      </section>
      
    </div>
  );
}

export default App;
