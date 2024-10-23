import './App.css';
import { TaskList } from './TaskList'
import { TaskProvider } from './TasksProvider';

function App() {

  return (
    <div className='App'>
      <h1>Medical Tasks</h1>
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    </div>
  );
}


export default App;

