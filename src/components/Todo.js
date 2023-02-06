import React, {useState} from "react";
import classes from "./Todo.module.css";
import editSvg from "../assets/icons/edit-v1.svg"
import EditTodoForm from "./EditTodoForm";

const Todo = ({ name, desc, id, onUpdateTodo, onDeleteTodo }) => {
    const [editTodo, setEditTodo] = useState(false);

    const handleEditToggle = () => {
        setEditTodo(prevState => !prevState)
    }

    const handleSaveTodoChanges = () => {

    }

    const todo = () => {
        return (
            <React.Fragment>
                <div className={classes.edit__container} onClick={handleEditToggle}>
                    <img className={classes.edit__svg} src={editSvg} />
                </div>
                <h3 className={classes.todoFont}>{name}</h3>
                <p className={classes.todoFont}>{desc}</p>
            </React.Fragment>
            )
    }

    return(
        <div className={classes.todo}>
            {editTodo ? (<EditTodoForm name={name} desc={desc} id={id} onUpdateTodo={onUpdateTodo} toggleEditTodo={handleEditToggle} onDeleteTodo={onDeleteTodo} />) : todo() }

        </div>
    )
}

export default Todo;