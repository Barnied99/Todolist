import '/Users/macbook/todo-ts/src/components/todo-input/todo-input';
import '/Users/macbook/todo-ts/src/components/todo-input/todo-input';
import { TextInput, Button } from '@mantine/core';
import { IconSearch } from "@tabler/icons-react";
import { useRef } from 'react';
import "../todo-input/todo-input.css"
import React from 'react';

interface ToDoInputForm {
    onChange: (e: string) => void,
    onClick: (e: any) => void,
}

const ToDoInput: React.FC<ToDoInputForm> = ({ onChange, onClick }) => {

    const ref = useRef(null)

    return (
        <div className="wrapper">
            <form onSubmit={onClick}>
                <TextInput
                    ref={ref}
                    placeholder="Click to add task" icon={<IconSearch size="0.8rem" />}
                    onChange={(event) => onChange(event.currentTarget.value)}
                    radius='sm'
                    size="md"
                    rightSection={
                        <Button
                            // onClick={onClick}
                            data-elem='search-button'
                            right={22}
                            size="xs"
                            type="submit"
                        >ENTER</Button>}
                />
            </form>


        </div>
    )
}

export default ToDoInput;
