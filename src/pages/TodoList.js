import React from 'react'
import TodoItemCreator from './TodoItemCreator'

// recoil
import { todoListState } from '../recoils/TodoListRecoil'
import TodoItem from './TodoItem'
import {
    useRecoilValue
} from 'recoil'


function TodoList() {
    const todoList = useRecoilValue(todoListState)
    return (
        <div>
            <TodoItemCreator/>
            {
                todoList &&
                todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} item={todoItem} />
                ))
            }
        </div>
    )
}

export default TodoList
