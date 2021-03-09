import React from 'react'
import TodoItemCreator from './TodoItemCreator'
import TodoListStats from './TodoListStats'
// recoil
// import { todoListState } from '../recoils/TodoListRecoil'
import { filteredTodoListState } from '../recoils/TodoListRecoil'
import TodoItem from './TodoItem'
import TodoFilters from './TodoFilters'
import {
    useRecoilValue
} from 'recoil'


function TodoList() {
    // const todoList = useRecoilValue(todoListState)  Filter된 리스트를 출력하기위해 아래 것으로 변경
    const todoList = useRecoilValue(filteredTodoListState)
    return (
        <div>
            <TodoListStats/>
            <TodoFilters/>
            <TodoItemCreator/>
            {
                todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} item={todoItem} />
                ))
            }
        </div>
    )
}

export default TodoList
