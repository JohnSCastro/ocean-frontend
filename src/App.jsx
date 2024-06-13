import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {


  const [itens, setItens] = useState([])

  async function carregarDados(){
    const apiUrl = 'https://rickandmortyapi.com/api/character'
    const response = await fetch(apiUrl)
    const body = await response.json()
    const results = body.results
    setItens(results)
    
    console.log(results)
  } 

  useEffect(function(){
    carregarDados()
  }, [])
  


  return (
    <>
    <div className='cards'>
      {itens.map(elemento => <Card item={elemento} key={elemento.name} />)}
    </div>
    
    </>
  )
}

export default App
