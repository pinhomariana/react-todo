import React, { useState } from 'react';

export default function TodoList({ tasks, setTasks }) {
    const [editingId, setEditingId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");

    function toggleTodo(id, completed) {
        setTasks(currentTasks => {
            return currentTasks.map(task => {
                if (task.id === id) {
                    return {...task, completed}
                }
                return task;
            })
        })
    }

    function deleteTask(id) {
        setTasks(currentTasks => {
            return currentTasks.filter(task => task.id !== id)
        })
    }

    function handleEditTask(id, title) {
        setEditingId(id);
        setEditedTitle(title);
    }

    function handleSaveEdit(id) {
        setTasks(currentTasks => {
            return currentTasks.map(task => {
                if (task.id === id) {
                    return {...task, title: editedTitle}
                }
                return task;
            })
        });
        setEditingId(null);
    }

    return (  
        <div>
            <ul>
                {tasks.map(task => {
                    return <li key={task.id}>
                        <input 
                            type='checkbox' 
                            checked={task.completed} 
                            onChange={e => toggleTodo(task.id, e.target.checked)}
                        />
                        {editingId === task.id ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editedTitle} 
                                    onChange={e => setEditedTitle(e.target.value)}
                                />
                                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                {task.title}
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                                <button onClick={() => handleEditTask(task.id, task.title)}>Edit</button>
                            </>
                        )}
                    </li>
                })}
            </ul>
        </div>
    )
}