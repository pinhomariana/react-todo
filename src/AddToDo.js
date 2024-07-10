import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddToDo({ tasks, setTasks }) {

    const [newTask, setNewTask] = useState ("");

    function addTask(e) {
        setTasks( currentTasks => {
            return [
                ...currentTasks, 
                {title: newTask, id: uuidv4(), completed: false}
            ]       
        })
        setNewTask("");
    }

    return (
        <div>
            <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)}></input>
            <button onClick={addTask}>Add To Do</button>
        </div>
    )  
}
