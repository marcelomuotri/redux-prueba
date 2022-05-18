import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [{
            "first_name" : "jorge"
        }]
    },
    reducers: {
        setUserList: (state, action) => {
            
            state.list = action.payload
            
        }
    }
})

export const {setUserList} = userSlice.actions

export default userSlice.reducer

export const fetchAllUsers =  () => async (dispatch) => {
    try {
        const res = await axios.get('https://reqres.in/api/users?page=2')
            dispatch(setUserList(res.data.data));
    } catch (error) {
        console.log(error)
    }
}