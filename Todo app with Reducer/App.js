import "./styles.css";
import React, { useEffect, useReducer, useState } from "react";
import data from "./data.json";

export default function App() {
  const reducer = (todos, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...todos,
          { id: Date.now(), taskText: action.payload.text, completed: false },
        ];
      case "DELETE_TODO":
        return todos.filter((todo) => todo.id !== action.payload.id);
      case "TOGGLE_TODO":
        return todos.map((todo) => {
          if (todo.id !== action.payload.id) return todo;
          else return { ...todo, completed: !todo.completed };
        });
      default:
        return todos;
    }
  };
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { text: text } });
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

function Todo({ todo, dispatch }) {
  return (
    <div
      style={{
        color: todo.completed ? "lightgray" : "black",
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      {todo.taskText}
      <button
        onClick={() =>
          dispatch({ type: "TOGGLE_TODO", payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
