import React, { useState } from 'react'
import { Boton, BotonAzul } from '../styled-components/Styled'
import { useDispatch, useSelector } from 'react-redux'
import { agregarTarea, eliminoTarea } from '../slices/tareas/Tareas'



const Crud = () => {


    const [tarea, setTarea] = useState("")
    const [contador, setContador] = useState(1)

    const dispatch = useDispatch()

    const { task } = useSelector(state => state.tareas)

    const funcion = () => {
        dispatch(agregarTarea({
            numero: contador,
            tarea: tarea
        }))
        setContador(contador + 1)
        setTarea('')

    }

    return (
        <div>
            <div>
                <Boton onClick={() => funcion()} verde>
                    Agregar
                </Boton>
                <input value={tarea} onChange={event => setTarea(event.target.value)} />
            </div>
            <div>
                {task.map((item, index) => {
                    return (
                        <div key={index}>
                            <div  >{index} -
                                {item.tarea}
                                <BotonAzul onClick={() => dispatch(eliminoTarea(index, task))} >
                                    Borrar tarea
                                </BotonAzul>
                            </div>

                        </div>
                    )

                })}
            </div>




        </div>
    )
}

export default Crud