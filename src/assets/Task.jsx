import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Task({ task, onDelete, onEdit, onToggleDone }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.newTask);

    function handleEditSubmit(ev) {
        ev.preventDefault();
        onEdit(editText);
        setIsEditing(false);
    }

    return (
       
            <div onDoubleClick={() => setIsEditing(true)}  className={task.done ? 'taskBox completed' : 'taskBox'}>
                <div className='content'>
               
                    <span className="check" onClick={onToggleDone}>
                        <i className={`fa-solid ${task.done ? 'fa-check-circle' : 'fa-solid fa-book'}`}></i>
                    </span>
                    {isEditing ? (
                        <form className='editForm' onSubmit={handleEditSubmit}>
                            <input className='editInput'
                                type="text"
                                placeholder='Edit Task'
                                value={editText}
                                onChange={ev => setEditText(ev.target.value)}
                            />
                            <i onClick={handleEditSubmit} className="fa-solid fa-check"></i>

                        </form>
                    ) : (
                        <p style={{ textDecoration: task.done ? 'line-through' : 'none'}}>{task.newTask}</p>
                    )}
                    <button className="delete" onClick={onDelete}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                   
                </div>
                <span className="updateTime">2 days ago</span>
            </div>
        
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        newTask: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
};
