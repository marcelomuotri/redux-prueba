import { createSlice } from '@reduxjs/toolkit'

export const tareaSlice = createSlice({
    name: 'tareas',
    initialState: {
        task: [
            {
                numero: 0,
                tarea: "no definida"
            }
        ]
    },
    reducers: {
        agregarTarea: (state, action) => {
            var objeto = action.payload
            state.task.push(objeto)
        },
        eliminarTarea: (state, action) => {
            state.task.splice(action.payload, 1)
        },

    }
})

export const { agregarTarea, eliminarTarea } = tareaSlice.actions

export default tareaSlice.reducer

export const eliminoTarea = (numero) => async (dispatch) => {
    
    dispatch(eliminarTarea(numero)) 

}