import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  // const [todos, setTodos] = useState([]);
  const [todos,setTodos]=useState(()=>{
    const localValue=localStorage.getItem("ITEM");
    return localValue!=null?JSON.parse(localValue):[];
  })

   useEffect(()=>{
    localStorage.setItem("ITEM",JSON.stringify(todos));
   },[todos])


  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id != id);
    });
  }

  function handleSubmit(newItem) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }

  return (
    <>
      {/* //pass the function which modifies state from here*/}
      <NewTodoForm onSubmit={handleSubmit}></NewTodoForm>
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      ></TodoList>
    </>
  );
}
