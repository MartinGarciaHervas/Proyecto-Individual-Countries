import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

//Views
import Landing from './views/landing/landingPage'
import Home from './views/home/home'
import Detail from './views/detail/detail'
import ActivityForm from './views/form/activityForm'

//Estilos
import './App.css'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/form' element={<ActivityForm/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
