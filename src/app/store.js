import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import users from './slices/users';
import contador from './slices/contador/contador';
import tareas from './slices/tareas/Tareas'

export const store = configureStore({
  reducer: {
    users,
    counterReducer,
    contador,
    tareas
  },
});
