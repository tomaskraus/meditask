import './App.css';
import { ItemList } from './ItemList'
import { TaskProvider } from './TasksProvider';

function App() {

  return (
    <div className='App'>
      <h1>Medical Tasks</h1>
      <TaskProvider>
        <ItemList />
      </TaskProvider>
    </div>
  );
}


export default App;

