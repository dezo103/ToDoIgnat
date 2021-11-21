import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Buttons} from "./components/Buttons";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    // changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist({tasks, removeTask, ...props}: PropsType) {

    let [title, setTitle] = useState("")
    const onClickHandler = (tID:string) => removeTask(tID)

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const tsarFoo = (value:FilterValuesType) => {
        changeFilter(value)
    }





    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <Buttons callBack={addTask} name={'+'}/>
            {/*<button onClick={addTask}>+</button>*/}
        </div>
        <ul>
            {
                tasksForTodolist.map(t => {
                    //const onClickHandler = () => props.removeTask(t.id)
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        {/*<button onClick={ onClickHandler }>x</button>*/}
                        <Buttons name={'x'} callBack={()=>onClickHandler(t.id)}/>
                    </li>
                })
            }
        </ul>
        <div>
            <Buttons name={'all'} callBack={()=>{tsarFoo("all")}}/>
            <Buttons name={'active'} callBack={()=>{tsarFoo("active")}}/>
            <Buttons name={'completed'} callBack={()=>{tsarFoo("completed")}}/>
            {/*<button onClick={ () => tsarFoo("all") }>All</button>*/}
            {/*<button onClick={ () => tsarFoo("active") }>Active</button>*/}
            {/*<button onClick={ () => tsarFoo("completed") }>Completed</button>*/}
        </div>
    </div>
}
