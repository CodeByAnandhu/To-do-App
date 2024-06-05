import './assets/App.css'
import Header from "./Header.jsx";
import TaskForm from "./assets/TaskForm.jsx";
import Task from './assets/Task.jsx';
import { useState, useEffect } from 'react';

function App() {
    const [tasks, setTasks] = useState(() => {
        // Load tasks from local storage
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        // Save tasks to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask(newTask) {
        setTasks(prev => [...prev, { newTask: newTask, done: false }]);
    }

    function deleteTask(index) {
        setTasks(prev => prev.filter((task, i) => i !== index));
    }

    function editTask(index, updatedTask) {
        setTasks(prev => prev.map((task, i) => i === index ? { ...task, newTask: updatedTask } : task));
    }

    function toggleTaskDone(index) {
        setTasks(prev => prev.map((task, i) => i === index ? { ...task, done: !task.done } : task));
    }

    return (
        <main>

            <Header />
            <div className='wrapper'>
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onDelete={() => deleteTask(index)}
                    onEdit={(updatedTask) => editTask(index, updatedTask)}
                    onToggleDone={() => toggleTaskDone(index)}
                />
            ))}
            </div>
            <TaskForm onAdd={addTask} />

           
        </main>
    );
}

export default App;
