import { createContext, useContext, useReducer, useEffect } from 'react'
import { fetchTasks } from './Fetcher';

const useTaskData = (onFetched) => {
    useEffect(() => {
        let tasksWereFetched = false;
        if (!tasksWereFetched) {
            let active = true;
            const startFetch = async () => {
                const fetchedTasks = await fetchTasks()
                if (active) {
                    // setData
                    console.log(' call onFetched')
                    onFetched(fetchedTasks)
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
    })
}


const TasksContext = createContext(null)
const TaskDispatchContext = createContext(null)

export const useTasks = () => useContext(TasksContext);
export const useTaskDispatch = () => useContext(TaskDispatchContext);

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [])
    useTaskData((data) => {
        dispatch({
            type: 'set_all_tasks',
            newTasks: data
        })
    })

    return <TasksContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
            {children}
        </TaskDispatchContext.Provider>
    </TasksContext.Provider>
}


const taskReducer = (tasks, action) => {
    switch (action.type) {
        case 'deleted_task': {
            return tasks.filter(t => t._id !== action.id)
        }
        case 'set_all_tasks': {
            return action.newTasks
        }
        default: {
            throw new Error(`Unknown task action type: ${action.type}`)
        }
    }
}


