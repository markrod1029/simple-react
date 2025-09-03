import { useState, useEffect } from 'react';
import api from './api/api';
import { FiTrash2, FiCheck } from 'react-icons/fi';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get('/tasks');
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    const res = await api.post('/tasks', { title });
    setTasks([...tasks, res.data]);
    setTitle('');
  };

  const toggleComplete = async (task) => {
    const res = await api.put(`/tasks/${task.id}`, { completed: !task.completed });
    setTasks(tasks.map(t => t.id === task.id ? res.data : t));
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="border rounded-l px-4 py-2 w-64"
          placeholder="Add new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="w-80">
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow">
            <span className={task.completed ? 'line-through text-gray-400' : ''}>
              {task.title}
            </span>
            <div className="flex gap-2">
              <button onClick={() => toggleComplete(task)} className="text-green-500 hover:text-green-700">
                <FiCheck />
              </button>
              <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                <FiTrash2 />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
