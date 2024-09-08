import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Home/Header'

import Our_service from './components/Services/Our_service'
import MainContent from './components/aboutus/MainContent'

import Personalloan from './components/subservices/Personalloan'
import Homeloan from './components/subservices/Homeloan'
import Business from './components/subservices/Business'
import Mortageloan from './components/subservices/Mortageloan'
import SuccessPage from './components/Home/SucessPage'

import Navbar from './components/Services/Navbar'

function App() {

  return (
    <div>
      <BrowserRouter>

        <Navbar />
        
        <Routes>
          <Route path='/Loanproject' element={<Header />}/>
          <Route path='/Loanproject/formresponse' element={<SuccessPage />}/>
          <Route path='/Loanproject/aboutus'element={<MainContent />}/>

          <Route path='/Loanproject/services' element={<Our_service />}/>
          <Route path='/Loanproject/services/personalloan' element={<Personalloan />}/>
          <Route path='/Loanproject/services/homeloan' element={<Homeloan />}/>
          <Route path='/Loanproject/services/businessloan' element={<Business />}/>
          <Route path='/Loanproject/services/mortageloan' element={<Mortageloan />}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
