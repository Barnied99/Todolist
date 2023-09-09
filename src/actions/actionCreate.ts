import { uAction } from "../reducer/task";
import { ADD_TASK, REMOVE_TASK, CHANGE_TASK } from '../constants';

export const addTastt = (id: string, text: string): uAction => ({
    type: ADD_TASK,
    id,
    text,

})
export const removeTask = (id: string): uAction => ({
    type: REMOVE_TASK,
    id,
})
export const changeTask = (id: string, textedit: string): uAction => ({
    type: CHANGE_TASK,
    id,
    textedit
})



