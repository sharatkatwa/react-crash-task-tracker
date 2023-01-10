import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddtask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'task 1',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'task 2',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'task 3',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <Header
        onAdd={() => setShowAddtask(!showAddTask)}
        showAdd={showAddTask}
        title="Task Tracker"
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <center>No Tasks To Show</center>
      )}
    </div>
  );
}

export default App;
