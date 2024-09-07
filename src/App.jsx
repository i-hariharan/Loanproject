import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Our_service from './components/Services/Our_service'
import MainContent from './components/aboutus/MainContent'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Header />}/>
          <Route path='/services' element={<Our_service />}/>
          <Route path='/aboutus'element={<MainContent />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
