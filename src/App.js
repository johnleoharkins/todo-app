import logo from './logo.svg';
import './App.css';
import { getApps } from "firebase/app";
import {useState} from "react";
import Button from "./components/Button";
import Overlay from "./components/Overlay";
import NewTodoForm from "./components/NewTodoForm";
import Todo from "./components/Todo";

function App() {
  const [newTodoFormOpen, setNewTodoFormOpen] = useState(false);
  const [todoList, setNewTodoList] = useState([])
  const toggleNewTodoForm = () => {
    setNewTodoFormOpen(prevState => !prevState)
  }

  const handleCreateNewTodo = (todoName, todoDesc, id) => {
    console.log(todoName)

    toggleNewTodoForm();
    setNewTodoList(prevState => [...prevState, {name: todoName, desc: todoDesc, id: id}])
  }

  const newTodoForm = () => {
    return <NewTodoForm addNewTodo={handleCreateNewTodo} />
  }

  const handleUpdateTodo = (id, name, desc) => {
    const todos = todoList.map((todo) => {
      if (todo.id === id){
        todo.name = name;
        todo.desc = desc;
      }
      return todo
    });
    setNewTodoList(todos)
  }

  const showTodoList = () => {
    return todoList.map((todo, i) => {

      return (
          <Todo name={todo.name} desc={todo.desc} id={todo.id} key={todo.id} onUpdateTodo={handleUpdateTodo} />
      )
    })
  }

  return (
    <div className="App">
      <div className={"App-Header"}>
        <h1>ToDo</h1>
        <Button name={"new todo"} onClick={toggleNewTodoForm} />
      </div>



      {todoList.length > 0 ? showTodoList() : (<p>No todos. Create one!</p>)}

      {newTodoFormOpen && <Overlay form={newTodoForm} onClose={toggleNewTodoForm} />}
    </div>
  );
}

export default App;
