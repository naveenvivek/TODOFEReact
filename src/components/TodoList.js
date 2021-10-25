import React, { useState, useEffect } from "react";

import Todo from "./Todo";
import DateTime from "./DateFormat";

const TodoList = (props) => {
  const [todoItem, setTodoItem] = useState(props.data);

  const [isDone, setIsDone] = useState(false);
  const [removeTask, setRemoveTask] = useState(false);

  useEffect(() => {
    if (isDone) {
      fetch(`http://localhost:8080/todo/updateTodo/${todoItem.id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(todoItem)
      })
        .then((response) => response.json())
        .then((data) => {
          setIsDone(false);
          setTodoItem(data);
        });
    }

    if (removeTask) {
      fetch(`http://localhost:8080/todo/1/deleteTodo/${todoItem.id}`, { method: 'DELETE' })
        .then((response) => response.json())
        .then((data) => {
          setRemoveTask(false);
          props.handleItems();
        });
    }

  }, [todoItem, isDone, removeTask]);

  return (
    <div className="todo">
      <input type="checkbox" checked={todoItem.completed} onChange={() => {
        setIsDone(true); setTodoItem({ ...todoItem })
      }} />


      <li className="todo-item">{todoItem.description}</li>
      <DateTime data={todoItem.lastUpdatedTime} />

      <button className="complete-btn" onClick={() => {
        setIsDone(true); setTodoItem({ ...todoItem })
      }}>




        <i className="fas fa-check"> </i>
      </button>
      <button className="trash-btn" onClick={() => {
        setRemoveTask(true); setTodoItem({ ...todoItem })
      }}>
        <i className="fas fa-trash"> </i>
      </button>


    </div>

  );
};


export default TodoList;