import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import { Toaster } from 'react-hot-toast'
import Furniture from './Pages/Furniture'
import Import from './Pages/Import'
import Export from './Pages/Export'
import Report from './Pages/Report'

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/import" element={<Import />} />
          <Route path="/export" element={<Export />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
