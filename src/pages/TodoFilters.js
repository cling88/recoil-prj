import React from 'react'

import { todoListFilterState } from '../recoils/TodoListRecoil'
import {
    useRecoilState
} from 'recoil'

const TodoFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
    const updateFilter = ({target: {value}}) => {
        setFilter(value);
      };

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    )
}

export default TodoFilters
