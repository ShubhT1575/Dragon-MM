import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Hero from './components/hero'
import MMTools from './components/MMTools'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import DexVolume from './components/DexVolume'

function App() {
  const [count, setCount] = useState(0)
  
  function ScrollToHash() {
    const { pathname, hash } = useLocation();
  
    useEffect(() => {
      if (hash) {
        // Delay needed because DOM might not be ready immediately
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }, [pathname, hash]); // Watch both pathname and hash!
  
    return null;
  }
  return (
    <>
      {/* <Header/> */}
      <Header/>
      <ScrollToHash/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/Mmtools' element={<MMTools/>}/>
          <Route path='/DexVolume' element={<DexVolume/>}/>
        </Routes>
      {/* </BrowserRouter> */}
      <BackToTop/>
      {/* <Footer/> */}
    </>
  )
}

export default App
