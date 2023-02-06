import React from "react";
import classes from "./TodoForm.module.css"

const TodoForm = ({todoName, todoDesc, handleChangeTodoName, handleChangeTodoDesc}) => {

    return(
        <React.Fragment>
            <div className={classes.control}>
                <label htmlFor={"todo-name"}>Todo Name: </label>
                <input type={"text"} id={"todo-name"} name={"todo-name"} placeholder={"What to do?"} onChange={handleChangeTodoName} value={todoName} autoComplete={"off"} />
            </div>
            <div className={classes.control}>
                <label htmlFor={"todo-desc"}>Todo Description: </label>
                <textarea id={"todo-desc"} name={"todo-desc"} rows={5} cols={25} placeholder={"Tell me more!"} onChange={handleChangeTodoDesc} value={todoDesc} autoComplete={"off"} />
            </div>
        </React.Fragment>
    )
}

export default TodoForm;