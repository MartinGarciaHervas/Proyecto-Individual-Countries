import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

//Estilos
import styles from './login.module.css'

export default function Login(){

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [login, setLogin] = useState(false);

    useEffect(()=>{
        if(login){
            navigate('/home')
        }
    }, [login])


    return(
        <div>
            <form>
                <input value={user.email} placeholder='Email'></input>
                <input value={user.password} type='password' placeholder='Password'></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}