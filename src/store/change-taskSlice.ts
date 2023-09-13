import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { load } from 'redux-localstorage-simple';

export interface Task {
    tasks?: Action[];
}
export interface Action {
    id: string,
    text: string,
}

// let TASKS: Task = load({ namespace: 'todo-list' })
// const initialState = (TASKS && TASKS.tasks) ? TASKS.tasks : []


let initialState: Task = {
}

const changeSlice = createSlice({
    name: 'tasklist',
    initialState: initialState.tasks || [],
    reducers: {
        setadd(state, action: PayloadAction<Action>) {
            const newTask: Action = {
                id: action.payload.id,
                text: action.payload.text
            }
            return [
                ...state,
                newTask
            ];
        },

        remove(state, action: PayloadAction<string>) {
            state = state.filter(item => item.id !== action.payload);
        },

        change(state, action: PayloadAction<Action>) {
            const { id, text } = action.payload;
            const taskIndex = state.findIndex(item => item.id === id);
            if (taskIndex !== -1) {
                state[taskIndex].text = text;
            }
        },
    },
});

export const changeActions = changeSlice.actions;

export default changeSlice.reducer;



// const changeSlice = createSlice({
//     name: 'tasklist',
//     initialState: initialState,
//     reducers: {
//         add(state, action: PayloadAction<Action>) {
//             const newTask = {
//                 id: action.payload.id,
//                 text: action.payload.text
//             }
//             return [
//                 ...state,
//                 newTask
//             ];
//         },

//         remove(state, action: PayloadAction<string>) {
//             const deleteTask = state.filter((item: any) => {
//                 return item.id !== action.payload
//             })
//             return [
//                 ...deleteTask
//             ];
//         },

//         change(state, action: PayloadAction<Action>) {
//             const { id, text } = action.payload
//             const updateTask = state.map((el) =>
//                 el.id === id ? { ...el, text: text } : el
//             )
//             return updateTask;
//         },
//     },
// });