import { createSlice } from '@reduxjs/toolkit';
import { load } from 'redux-localstorage-simple';

export interface Task {
    tasks?: Action[];
}
export interface Action {
    id: string,
    text: string,
}

interface uActionTypeAdd {
    id: string;
    text: string
}
interface uActionTypeRem {
    id: string;
}
interface uActionTypeChange {
    id: string;
    textedit: string
}

export type uAction = uActionTypeAdd | uActionTypeRem | uActionTypeChange

let TASKS: Task = load({ namespace: 'todo-list' })

const initialState = (TASKS && TASKS.tasks) ? TASKS.tasks : []


const changeSlice = createSlice({
    name: 'tasklist',
    initialState: initialState,
    reducers: {
        add(state, action) {
            const newTask = {
                id: action.payload.id,
                text: action.payload.text
            }
            return [
                ...state,
                newTask
            ];
        },

        remove(state, action) {
            const deleteTask = state.filter((item: any) => {
                return item.id !== action.payload.id
            })
            return [
                ...deleteTask
            ];
        },

        change(state, action) {
            const { id, textedit } = action.payload
            const updateTask = state.map((el) =>
                el.id === id ? { ...el, text: textedit } : el
            )
            return updateTask;
        },
    },
});

export const changeActions = changeSlice.actions;

export default changeSlice.reducer;
