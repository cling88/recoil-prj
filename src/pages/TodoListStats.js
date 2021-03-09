import React from 'react'

import { todoListStatsState } from '../recoils/TodoListRecoil'
import {
    useRecoilValue
} from 'recoil'

const TodoListStats = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted);

    return (
        <ul>
            <li>Total items: {totalNum}</li>
            <li>Item completed: {totalCompletedNum}</li>
            <li>Item items: {totalUncompletedNum}</li>
            <li>Percent completed: {formattedPercentCompleted}</li>
        </ul>
    )
}

export default TodoListStats
