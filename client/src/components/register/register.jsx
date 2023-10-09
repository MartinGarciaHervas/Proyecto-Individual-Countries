import { useState } from 'react'

import LoginValid from '../../helpers/loginValidator'
import { registerUser } from '../../Redux/Actions/actions';
import { useDispatch } from 'react-redux';

export default function Register (){

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

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

    console.log(user);

    function submitHandler(event){
        event.preventDefault();
        dispatch(registerUser(user))
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={changeHandler} name="email" value={user.email} placeholder="Email"></input>
                <span>{errors.email}</span>
                <input onChange={changeHandler} name="password" value={user.password} placeholder="password"></input>
                <span>{errors.password}</span>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}