import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

//Estilos
import styles from './login.module.css'
import LoginValid from '../../helpers/loginValidator'

export default function Login(){

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const [login, setLogin] = useState(false);

    useEffect(()=>{
        if(login){
            navigate('/home')
        }
    }, [login])

    function changeHandler(event){
        setUser({
            ...user,
            [event.target.name]:event.target.value
        });
        setErrors(LoginValid({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(){
        
    }


    return(
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={changeHandler} name='email' value={user.email} placeholder='Email'></input>
                <span>{errors.email}</span>
                <input onChange={changeHandler} name='password' value={user.password} type='password' placeholder='Password'></input>
                <span>{errors.password}</span>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}