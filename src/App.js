import './App.css';
import React, { useState, useEffect, Fragment } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [todoItems, setTodoItems] = useState(null);

  const handleItems = () => {
  setTodoItems(null);
  }

  useEffect(() => {

    console.log("Loaded");
    if (!todoItems) {
      fetch('http://localhost:8080/todo/1')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodoItems(data);
        });
    }
  }, [todoItems]);

  return (
   <div className="App">
       <header>
         <h1>Ey Assignment Todo List</h1>
         </header>
         <Form />

         {todoItems ? todoItems.todoList.map((todoItem) => {
           return (
            <TodoList key={todoItem.id} data={todoItem} handleItems={handleItems} />
           );
         }) : "loading data...."}
       </div>
  );
}

export default App;
