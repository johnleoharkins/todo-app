import React, {useState} from "react";
import classes from "./NewTodoForm.module.css";
import { v4 as uuidv4 } from 'uuid';
const NewTodoForm = ({addNewTodo}) => {
    const [todoName, setTodoName] = useState('');
    const [todoDesc, setTodoDesc] = useState('');

    const handleChangeTodoName = (e) => {
        // console.log(e.target.value)
        setTodoName(e.target.value)
    }
    const handleChangeTodoDesc = (e) => {
        // console.log(e.target.value)
        setTodoDesc(e.target.value)
    }
    const submitTodo = (event) => {
        event.preventDefault();
        addNewTodo(todoName, todoDesc, uuidv4())
        setTodoName('')
        setTodoDesc('')

    }

    return (
        <form className={classes.todoForm} onSubmit={submitTodo}>
            <div className={classes.controlContainer}>
                <div>
                    <label htmlFor={"todo-name"}>Todo Name: </label>
                    <input type={"text"} id={"todo-name"} name={"todo-name"} placeholder={"What to do?"} onChange={handleChangeTodoName} />
                </div>
                <div>
                    <label htmlFor={"todo-desc"}>Todo Description: </label>
                    <textarea id={"todo-desc"} name={"todo-desc"} rows={5} cols={25} placeholder={"Tell me more!"} onChange={handleChangeTodoDesc} />
                </div>

                <button>add todo</button>
            </div>
        </form>
    )
}

export default NewTodoForm;