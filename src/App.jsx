import { useContext, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import GrvncSubmit from './Pages/GrvncSubmit'
import Authentication from './Pages/Authentication'
import Dashboard from './Pages/Dashboard'
import { tokenAuthContext } from './Contexts/AuthContext'

function App() {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  console.log(isAuthorised);
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Authentication insideRegister={true} />} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/grvncsubmit' element={isAuthorised ? <GrvncSubmit/>:<Navigate to={'/login'}/>}/>
        <Route path='/dashboard' element={isAuthorised ? <Dashboard />:<Navigate to={'/login'}/>} />
        {/* page not found */}
        <Route path='/*' element={<Navigate to={'/'}/>} />
      </Routes>
    </>
  )
}

export default App
