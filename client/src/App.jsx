import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addAllCountries } from './Redux/Actions/actions'

//Views
import Landing from './views/landing/landingPage'
import Home from './views/home/home'
import Detail from './views/detail/detail'
import ActivityForm from './views/form/activityForm'

//Estilos
import style from './App.module.css'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAllCountries())
  }, [])

  return (
    <>
      <div className={style.app}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/form' element={<ActivityForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
