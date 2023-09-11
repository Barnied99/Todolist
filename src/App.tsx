import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormEvent } from 'react';

import ToDoInput from '/Users/macbook/todo-ts/src/components/todo-input/todo-input';
import ToDoList from '/Users/macbook/todo-ts/src/components/todo-list/todo-list';

import { changeActions } from '../src/store/change-taskSlice'

import { useAppSelector, useAppDispatch } from './app.ts/hooks';
import Footer from './components/Footer/Footer';


import './App.css';

const App = () => {
  const [state, setState] = useState({ taskText: '' })

  const tasksList = useAppSelector((store) => store?.tasklist || [])
  const dispatch = useAppDispatch();

  const handleInputchange = (e: string) => {
    setState({
      taskText: e,
    })
  }

  const removetask = (id: string) => {
    dispatch(changeActions.remove({ id }))
  }

  const addTast = (e: FormEvent<HTMLFormElement>) => {
    dispatch(changeActions.add({
      id: uuidv4(),
      text: state.taskText
    }
    ));

  }

  const updateTask = (selectTaskId: string, newtext: string) => {
    dispatch(changeActions.change({ id: selectTaskId, text: newtext }))
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
