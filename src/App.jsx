import { useState } from 'react'
import './index.css'
import Navbar from './components/NavBar'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form></Form>
    </>
  )
}

export default App
