import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../slices/users'


const Tabla = () => {

  const dispatch = useDispatch()

  


  const { list: users } = useSelector(state => state.users)

  return (
    <div>
      {users.map((item, index) => {
        return <div key={index}>{item.first_name}</div>
      })}
      <button onClick={() => dispatch(fetchAllUsers())}>JEEEEEEEEE</button>
     
    </div>
  )
}

export default Tabla