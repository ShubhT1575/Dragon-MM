import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Hero from './components/hero'
import MMTools from './components/MMTools'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import DexVolume from './components/DexVolume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/Mmtools' element={<MMTools/>}/>
          <Route path='/DexVolume' element={<DexVolume/>}/>
        </Routes>
      </BrowserRouter>
      <BackToTop/>
      {/* <Footer/> */}
    </>
  )
}

export default App
