//Router Dom
import { Routes, Route } from 'react-router-dom'

//Views
import Landing from './views/landing/landingPage'
import Home from './views/home/home'
import Detail from './views/detail/detail'
import ActivityForm from './views/form/activityForm'

//Components
import NavBar from './components/navBar/navBar'

//Estilos
import style from './App.module.css'

function App() {

  return (
    <>
      <div className={style.app}>
        <NavBar />
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
