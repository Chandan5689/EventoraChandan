import { useState } from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Body from './component/Body/Body'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Body/>
   <Footer/>
   </>
  )
}

export default App
