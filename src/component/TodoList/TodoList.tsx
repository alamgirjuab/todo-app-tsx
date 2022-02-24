import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './TodoList.css';

interface iTask {
    taskName: string,
    deadline: number,
}
const TodoList: FC = () => {
    const [task, setTask] = useState<string>('');
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<iTask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        } else {
            setDeadline(Number(event.target.value))
        }

    }

    const addTask = (): void => {
        setTodoList([...todoList])
    }
    return (
        <div>
            <h2>Todo List Web App</h2>
            <div className="input-area">
                <input className="custom-style" type="text" name="task" placeholder="Input Your Task Here" onChange={handleChange} /><br />
                <input className="custom-style" type="number" name="deadline" placeholder="Deadline" onChange={handleChange} /><br />
                <button className="custom-style" onClick={addTask}>Add Task</button>
            </div>
        </div>
    )
}

export default TodoList