import React, { useState } from 'react'

// recoil
import { todoListState } from '../recoils/TodoListRecoil'
import { useSetRecoilState } from 'recoil';

function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    }
    
    const addItem = () => {
        setTodoList((prevTodoList) => [
            ...prevTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false
            }
        ]);
        setInputValue('');
    }
 
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange}  />
            <button onClick={addItem}>Add</button>
        </div>
    )
}

let id = 0; 
function getId() {
    return id++;
}

export default TodoItemCreator
