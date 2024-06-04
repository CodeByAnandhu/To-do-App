import { useState } from 'react';
import PropTypes from 'prop-types';

export default function TaskForm({ onAdd }) {
    const [taskName, setTaskName] = useState('');

    function handleSubmit(ev) {
        ev.preventDefault();
        if (taskName.trim()) {
            onAdd(taskName);
            setTaskName('');
        } else {
            alert("Task cannot be empty");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskName}
                    onChange={ev => setTaskName(ev.target.value)}
                    placeholder="What's the plan, anandhu?"
                />
                <i onClick={handleSubmit} className="fa-solid fa-circle-chevron-up"></i>                <button style={{display: 'none'}} type="submit">Add Task</button>
            </form>
        </div>
    );
}

TaskForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};