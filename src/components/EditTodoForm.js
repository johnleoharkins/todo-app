import React, {useState} from "react";
import Button from "./Button";
import TodoForm from "./TodoForm";
import IconButton from "./IconButton";
import CancelSvg from "../assets/icons/cancel.svg";
import classes from "./EditTodoForm.module.css";


const EditTodoForm = ({name, desc, id, onUpdateTodo, toggleEditTodo, onDeleteTodo}) => {
    const [todoName, setTodoName] = useState(name);
    const [todoDesc, setTodoDesc] = useState(desc);

    const handleChangeTodoName = (e) => {
        setTodoName(e.target.value)
    }
    const handleChangeTodoDesc = (e) => {
        setTodoDesc(e.target.value)
    }

    const handleUpdate = () => {
        onUpdateTodo(id, todoName, todoDesc);
        toggleEditTodo();
    }

    const handleDelete = () => {
        onDeleteTodo(id);
        toggleEditTodo();
    }

    return(
        <React.Fragment>
            <IconButton svg={CancelSvg} onClick={toggleEditTodo} />
            <TodoForm todoName={todoName} todoDesc={todoDesc} handleChangeTodoName={handleChangeTodoName} handleChangeTodoDesc={handleChangeTodoDesc} />
            <div className={classes.controls__container}>
                <Button onClick={handleUpdate} name={"Save"} />
                <Button onClick={handleDelete} name={"Delete"} />
            </div>

        </React.Fragment>
    )
}

export default EditTodoForm;