import MyButton from './MyButton'
import TaskItem from './TaskItem';
import { TasksContext, TaskDispatchContext } from './TasksProvider';

import { useContext } from 'react';

export function ItemList() {
    const items = useContext(TasksContext)
    const dispatch = useContext(TaskDispatchContext)
    const listItems = items.map((item) =>
        <li key={item._id}>
            <TaskItem {...item} />
            <MyButton caption='delete' onClick={() => dispatch({
                type: 'deleted_task',
                id: item._id
            })} />
        </li>
    )

    return <ul>{listItems}</ul>
}