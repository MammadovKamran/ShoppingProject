import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../navigation/Navbar'
import Dashboard from '../root/Dashboard'

const App = () => {

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App