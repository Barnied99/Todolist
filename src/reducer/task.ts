import { load } from 'redux-localstorage-simple';

import { ADD_TASK, REMOVE_TASK, CHANGE_TASK } from '../constants';


export interface Task {
    tasks?: Action[];
}
export interface Action {
    id: string,
    text: string,
}
interface uActionTypeAdd {
    type: typeof ADD_TASK;
    id: string;
    text: string
}
interface uActionTypeRem {
    type: typeof REMOVE_TASK;
    id: string;
}
interface uActionTypeChange {
    type: typeof CHANGE_TASK;
    id: string;
    textedit: string
}

export type uAction = uActionTypeAdd | uActionTypeRem | uActionTypeChange

let TASKS: Task = load({ namespace: 'todo-list' })

const initialstate = (TASKS && TASKS.tasks) ? TASKS.tasks : []

const tasks = (state = initialstate, action: uAction): Action[] => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                id: action.id,
                text: action.text
            }
            return [
                ...state,
                newTask
            ];
        case REMOVE_TASK:

            const deleteTask = state.filter((item: any) => {
                return item.id !== action.id
            })
            return [
                ...deleteTask
            ];
        case CHANGE_TASK:
            const { id, textedit } = action
            const updateTask = state.map((el) =>
                el.id === id ? { ...el, text: textedit } : el
            )
            return updateTask;

        default:
            return state;
    }
}
export default tasks




