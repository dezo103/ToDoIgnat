import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Buttons} from "./components/Buttons";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
}

export function Todolist({tasks, removeTask, ...props}: PropsType) {

    // let [title, setTitle] = useState("")
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

    // const addTask = () => {
    //     props.addTask(title);
    //     setTitle("");
    // }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.charCode === 13) {
    //         addTask();
    //     }
    // }

    const tsarFoo = (value:FilterValuesType) => {
        changeFilter(value)
    }

    let [title, setTitle] = useState("")

    const callBackHandlerForAddTask = () => {
        props.addTask(title)
        setTitle("")
    }

    return <div>
        <h3>{props.title}</h3>
        {/*<FullInput callBack = {props.addTask}/>*/}
        <Input setTitle={setTitle} title={title} callBack={callBackHandlerForAddTask}/>
        <Buttons name={'+'} callBack={callBackHandlerForAddTask}/>
        {/*<div>*/}
        {/*    <input value={title}*/}
        {/*           onChange={ onChangeHandler }*/}
        {/*           onKeyPress={ onKeyPressHandler }*/}
        {/*    />*/}
        {/*    <Buttons callBack={addTask} name={'+'}/>*/}
        {/*</div>*/}
        <ul>
            {
                tasksForTodolist.map(t => {
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Buttons name={'x'} callBack={()=>onClickHandler(t.id)}/>
                    </li>
                })
            }
        </ul>
        <div>
            <Buttons name={'all'} callBack={()=>{tsarFoo("all")}}/>
            <Buttons name={'active'} callBack={()=>{tsarFoo("active")}}/>
            <Buttons name={'completed'} callBack={()=>{tsarFoo("completed")}}/>
        </div>
    </div>
}
