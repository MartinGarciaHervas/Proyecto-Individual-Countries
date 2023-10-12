import { useDispatch } from 'react-redux'
import { useState } from 'react'

//Actions
import { orderByPopulation, orderByAlphabetic } from '../../Redux/Actions/actions'

//Estilos
import style from './orders.module.css'

export default function Orders() {
    const dispatch = useDispatch()

    //Orders

    function orderByPopulationHandler(event) {
        dispatch(orderByPopulation(event.target.value))
    }

    function orderByAlphabeticHandler(event) {
        dispatch(orderByAlphabetic(event.target.value))
    }

    const [orderAux, setOrderAux] = useState(false)

    function orderAuxHandler() {
        setOrderAux(orderAux ? false : true)
    }

    return (
        <div className={style.filtros}>
            {orderAux ? <button className={style.button} onClick={orderAuxHandler}>Hide Orders</button>
                : <button className={style.button} onClick={orderAuxHandler}>Show Orders</button>}
            {<div className={orderAux ? style.order2 : style.order3}>
                <div>
                    <p>By population</p>
                    <select onChange={orderByPopulationHandler}>
                        <option value='ascendente'>Ascendente</option>
                        <option value='descendente'>Descendente</option>
                    </select>
                </div>
                <div>
                    <p>Alphabetic</p>
                    <select onChange={orderByAlphabeticHandler}>
                        <option value='ascendente'>Ascendente</option>
                        <option value='descendente'>Descendente</option>
                    </select>
                </div>
            </div>}
        </div>
    )
}