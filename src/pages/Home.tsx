import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormEvent } from 'react';

import ToDoInput from '../components/todo-input/todo-input';
import ToDoList from '../components/todo-list/todo-list';
import { changeActions } from '../store/change-taskSlice'
import { useAppSelector, useAppDispatch } from '../app.ts/hooks';


const HomePage = () => {

    const [state, setState] = useState({ taskText: '' })
    const tasksList = useAppSelector((store) => store?.tasklist)
    const dispatch = useAppDispatch();

    console.log(tasksList);

    const handleInputchange = (e: string) => {
        setState({
            taskText: e,
        })
    }
    const removetask = (id: string) => {
        dispatch(changeActions.remove(id))
    }
    const addTast = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(changeActions.setadd({
            id: uuidv4(),
            text: state.taskText
        }
        ));
        setState({
            taskText: ''
        })
    }
    const updateTask = (selectTaskId: string, newtext: string) => {
        dispatch(changeActions.change({ id: selectTaskId, text: newtext }))
    }

    return (
        <>
            <ToDoInput onClick={addTast} onChange={handleInputchange} />
            <ToDoList tasksList={tasksList} removeTask={removetask} onUpdate={updateTask} />
        </>

    )
};

export default HomePage;
