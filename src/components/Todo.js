import React, {useState} from "react";
import classes from "./Todo.module.css";

const Todo = ({ name, desc, id }) => {

    return(
        <div className={classes.todo}>
            <h3 className={classes.todoFont}>{name}</h3>
            <p className={classes.todoFont}>{desc}</p>
        </div>
    )
}

export default Todo;