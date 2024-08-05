import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
