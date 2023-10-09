import { useEffect } from 'react'
import { useSelector } from 'react-redux'

//Router Dom
import { Routes, Route, useNavigate } from 'react-router-dom'

//Views
import Landing from './views/landing/landingPage'
import Home from './views/home/home'
import Detail from './views/detail/detail'
import ActivityForm from './views/form/activityForm'
import Game from './views/game/game'

//Components
import NavBar from './components/navBar/navBar'

//Estilos
import style from './App.module.css'

function App() {

  const navigate = useNavigate()

  const access = useSelector(state => state?.user.access)

  useEffect(()=>{
    if(access){
      navigate('/home')
    }else{
      navigate('/')
    }
  },[access])

  return (
    <>
      <div className={style.app}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/form' element={<ActivityForm />} />
          <Route path='/game' element={<Game />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
