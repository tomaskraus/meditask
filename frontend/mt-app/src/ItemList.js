import MyButton from './MyButton'
import TaskItem from './TaskItem';
import {useTasks, useTaskDispatch } from './TasksProvider';

export function ItemList() {
    const items = useTasks()
    const dispatch = useTaskDispatch()
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