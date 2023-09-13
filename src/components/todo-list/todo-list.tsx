import React from 'react';
import { Flex, ScrollArea } from "@mantine/core";
import { v4 as uuidv4 } from 'uuid';

import { Action } from '../../store/change-taskSlice';
import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

interface ToDoLists {
    tasksList: Action[],
    removeTask: (id: string) => void,
    onUpdate: (id: string, newtext: string) => void
}

const ToDoList: React.FC<ToDoLists> = ({ tasksList, removeTask, onUpdate }) => {

    return (
        <div className='container'>
            <ScrollArea h={800} type="never">
                <Flex gap="md"
                    direction="column">
                    {tasksList.map((el) => (
                        <ToDoItem onUpdate={onUpdate} removeTask={removeTask} key={uuidv4()} el={el} ></ToDoItem>


                    ))}
                </Flex>
            </ScrollArea>

        </div>
    )
}

export default ToDoList;
