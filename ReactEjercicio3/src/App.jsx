import { useState } from 'react'
import Titulos from './components/Titulos';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Titulos></Titulos>
    </>
  )
}

export default App
