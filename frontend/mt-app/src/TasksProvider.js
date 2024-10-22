import { createContext, useContext, useReducer } from 'react'

const TasksContext = createContext(null)
const TaskDispatchContext = createContext(null)

export const useTasks = () => useContext(TasksContext);
export const useTaskDispatch = () => useContext(TaskDispatchContext);

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [])

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
