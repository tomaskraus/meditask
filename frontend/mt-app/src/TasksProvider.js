import { createContext } from 'react'
import { useReducer } from 'react'


export const TasksContext = createContext(null)
export const TaskDispatchContext = createContext(null)

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, data)

    return <TasksContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
            {children}
        </TaskDispatchContext.Provider>
    </TasksContext.Provider>
}


const data = [
    {
        "_id": "670925f3f582f10ffd3c5ab0",
        "caption": "string",
        "description": "string",
        "startDate": "2024-09-11T00:00:00.000Z",
        "endDate": "2024-09-11T00:00:00.000Z",
        "schedule": "\"0 30 11 * * 1-5\" Monday to Friday at 11:30am",
        "__v": 0
    },
    {
        "_id": "67092776f582f10ffd3c5acd",
        "caption": "Helou",
        "description": "word",
        "startDate": "2024-09-11T00:00:00.000Z",
        "endDate": "2024-09-11T00:00:00.000Z",
        "schedule": "0 45 11 * * 1-5",
        "__v": 0
    }
]

const taskReducer = (tasks, action) => {
    switch (action.type) {
        case 'deleted_task': {
            return tasks.filter(t => t._id !== action.id)
        }
        default: {
            throw new Error(`Unknown task action type: ${action.type}`)
        }
    }
}
