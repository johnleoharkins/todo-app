import React, {useState} from "react";
import Button from "./Button";
import TodoForm from "./TodoForm";

const EditTodoForm = ({name, desc, id, onUpdateTodo, toggleEditTodo, onDeleteTodo}) => {
    const [todoName, setTodoName] = useState(name);
    const [todoDesc, setTodoDesc] = useState(desc);

    const handleChangeTodoName = (e) => {
        // console.log(e.target.value)
        setTodoName(e.target.value)
    }
    const handleChangeTodoDesc = (e) => {
        // console.log(e.target.value)
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
            {/*<div>*/}
            {/*    <label htmlFor={"todo-name"}>Todo Name: </label>*/}
            {/*    <input type={"text"} id={"todo-name"} name={"todo-name"} placeholder={"What to do?"} value={todoName} onChange={handleChangeTodoName} />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <label htmlFor={"todo-desc"}>Todo Description: </label>*/}
            {/*    <textarea id={"todo-desc"} name={"todo-desc"} rows={5} cols={25} placeholder={"Tell me more!"} value={todoDesc} onChange={handleChangeTodoDesc} />*/}
            {/*</div>*/}

            <TodoForm todoName={todoName} todoDesc={todoDesc} handleChangeTodoName={handleChangeTodoName} handleChangeTodoDesc={handleChangeTodoDesc} />
            <Button onClick={handleUpdate} name={"Save"} />
            <Button onClick={handleDelete} name={"Delete"} />
        </React.Fragment>
    )
}

export default EditTodoForm;