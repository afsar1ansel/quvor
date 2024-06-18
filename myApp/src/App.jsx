import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Componants/Navbar'
import Hero from './Componants/Hero'
import Body1 from './Componants/Body1'
import Body2 from './Componants/Body2'
import Newletter from './Componants/Newletter'
import Footer from './Componants/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Body1 />
    <Body2 />
    <Newletter />
    <Footer />
    </>
  )
}

export default App
