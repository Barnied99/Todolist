import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormEvent } from 'react';

import ToDoInput from '/Users/macbook/todo-ts/src/components/todo-input/todo-input';
import ToDoList from '/Users/macbook/todo-ts/src/components/todo-list/todo-list';

import { addTastt, removeTask, changeTask } from '../src/actions/actionCreate'

import { useAppSelector, useAppDispatch } from './app.ts/hooks';
import Footer from './components/Footer/Footer';


import './App.css';

const App = () => {
  const [state, setState] = useState({ taskText: '' })

  const tasksList = useAppSelector((store) => store?.tasks || [])

  const dispatch = useAppDispatch();

  const handleInputchange = (e: string) => {
    setState({
      taskText: e,
    })
  }

  const removetask = (id: string) => {
    dispatch(removeTask(id))
  }

  const addTast = (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault()
    dispatch(addTastt(uuidv4(),
      state.taskText,
    ));

  }

  const updateTask = (selectTaskId: string, newtext: string) => {
    dispatch(changeTask(selectTaskId, newtext))
  }


  return (
    <div className='App'>
      <ToDoInput onClick={addTast} onChange={handleInputchange} />
      <ToDoList tasksList={tasksList} removeTask={removetask} onUpdate={updateTask} />
      <Footer />
    </div>
  );
}

export default App;
