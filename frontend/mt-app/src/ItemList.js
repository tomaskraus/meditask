import { useEffect } from 'react'
import { fetchTasks } from './Fetcher';

import MyButton from './MyButton'
import TaskItem from './TaskItem';
import { useTasks, useTaskDispatch } from './TasksProvider';

let tasksWereFetched = false;

export function ItemList() {
    const items = useTasks()
    const dispatch = useTaskDispatch()

    useEffect(() => {
        // weird ...

        if (!tasksWereFetched) {
            let active = true;
            const startFetch = async () => {
                const fetchedTasks = await fetchTasks()
                if (active) {
                    dispatch({
                        type: 'set_all_tasks',
                        newTasks: fetchedTasks
                    })
                    tasksWereFetched = true
                    console.log('...fetched')
                }
            }
            
            startFetch()
            return () => {
                console.log('CANCEL FETCH')
                active = false;
            }
        }
    }, [])

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