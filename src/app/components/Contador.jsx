import React from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import { restarUno, sumarUno } from '../slices/contador/contador'

const Contador = () => {

    const dispatch = useDispatch()

    const {numero} = useSelector (state => state.contador)

    return (
        <>
            <div>{numero}</div>
            <button onClick={ () =>dispatch(sumarUno(numero))}>+</button>
            <button onClick={ () =>dispatch(restarUno(numero))}>-</button>
        </>
    )
}

export default Contador