import './App.css';
import { useState } from 'react'

import MyButton from './MyButton'
import TaskItem from './TaskItem';







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

function App() {

  const [tasks, setTasks] = useState(data)

  const deleteTask = _id => {
    // alert(`delete: ${_id}`)
    setTasks(tasks.filter(d => d._id !== _id))
  }

  function ItemList({ items = [], onDelete }) {
    const listItems = items.map((item) =>
      <li key={item._id}>
        <TaskItem {...item} />
        <MyButton caption='delete' onClick={() => onDelete(item._id)} />
      </li>
    )

    return <ul>{listItems}</ul>
  }


  return (
    <div className='App'>
      <h1>Medical Tasks</h1>
      <>
        <ItemList items={tasks} onDelete={deleteTask} />
      </>
    </div>
  );
}


export default App;
