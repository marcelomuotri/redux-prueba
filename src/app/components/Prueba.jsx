import React, {useEffect} from 'react'
import { fetchAllUsers } from '../slices/users'
import { useDispatch, useSelector } from 'react-redux'

const Prueba = () => {

    const { value } = useSelector (state => state.counterReducer)

    return (
        <div>
               {value}
        </div>
    )
}

export default Prueba