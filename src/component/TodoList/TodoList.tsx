import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './TodoList.css';

const TodoList: FC = () => {
    const [task, setTask] = useState<string>('');
    const [deadline, setDeadline] = useState<number>(0);
    const [todo, setTodo] = useState([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <div>
            <h2>Todo List Web App</h2>
            <div className="input-area">
                <input className="custom-style" type="text" placeholder="Input Your Task Here" onChange={handleChange} /><br />
                <input className="custom-style" type="number" placeholder="Deadline" onChange={handleChange} /><br />
                <button className="custom-style">Add Task</button>
            </div>
        </div>
    )
}

export default TodoList