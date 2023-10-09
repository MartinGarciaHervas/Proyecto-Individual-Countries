import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

//Actions
import { setUser } from '../../Redux/Actions/actions'

//Estilos
import styles from './login.module.css'

export default function Login(){

    const dispatch = useDispatch()

    const login = useSelector(state=>state.user.access)

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    useEffect(()=>{
        if(login){
            navigate('/home')
        }
    }, [login])

    function changeHandler(event){
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }

    function submitHandler(){
        dispatch(setUser(user))
    }


    return(
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={changeHandler} name='email' value={user.email} placeholder='Email'></input>
                <input onChange={changeHandler} name='password' value={user.password} type='password' placeholder='Password'></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}