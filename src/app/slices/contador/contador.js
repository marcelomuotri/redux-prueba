import { createSlice } from '@reduxjs/toolkit'

export const contSlice = createSlice({
    name: 'contador',
    initialState: {
        numero: 7
    },
    reducers: {
        setSuma: (state, action) => {
            state.numero = action.payload
            /* state.numero++
            console.log(state.numero) */
        },
        setResta: (state, action) => {
            state.numero = action.payload
            /* state.numero--
            console.log(state.numero) */
        }
    }
})

export const { setSuma, setResta } = contSlice.actions

export default contSlice.reducer

export const sumarUno = (numero) => async (dispatch) => {
    
    dispatch(setSuma(numero + 1)) 
}

export const restarUno = (numero) => async (dispatch) => {
    
    dispatch(setResta(numero - 1)) 
}