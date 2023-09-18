import React from 'react';
import { Textarea, Button } from '@mantine/core';
import { useState } from 'react';
import { IconTrash } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';

import { Action } from '../../store/slice/change-taskSlice';

import './todo-item.css';


export interface ToDoItems {
    removeTask: (e: string) => void,
    onUpdate: (id: string, text: string) => void,
    el: Action,
    index: number
}

const ToDoItem: React.FC<ToDoItems> = ({ removeTask, el, onUpdate, index }) => {
    const [value, setValue] = useState(`${el.text}`);
    const updateText = (id: string) => {
        onUpdate(id, value)
    }

    return (
        <div className='conteiners0'>
            <div className='container1'>
                <Textarea
                    minRows={4}
                    maxRows={4}
                    className='_todo'
                    variant="unstyled"
                    onChange={(event) => setValue(event.currentTarget.value)}
                    value={value}
                ></Textarea>
                <div className='container2'>
                    <Button
                        title="Close popover"
                        onClick={() => removeTask(el.id)}
                        variant="subtle"
                        right={5}
                        size="xs"
                    >
                        <IconTrash width={20} height={20} />
                    </Button>
                    <Button
                        title="Change"
                        onClick={() => updateText(el.id)}
                        variant="subtle"
                        right={5}
                        size="xs"
                    >
                        <IconEdit width={20} height={20} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ToDoItem;









