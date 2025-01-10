import { useState } from 'react'
import './index.css'
import Navbar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar />
    </>
  )
}

export default App
