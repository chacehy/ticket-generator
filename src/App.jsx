import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Background from './components/ui/background.jsx'

import './output.css'
import {
  ColorModeButton,
  useColorMode,
  useColorModeValue,
} from "./components/ui/color-mode"
import { Button } from "./components/ui/button"
import Login from "./components/ui/login.jsx"

function App() {
  const [count, setCount] = useState(0)
  const {toggleColorMode} = useColorMode()
  return (
    <>
    <Login/>
    </>
  )
}

export default App
