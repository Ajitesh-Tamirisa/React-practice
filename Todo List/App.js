// https://www.greatfrontend.com/questions/user-interface/todo-list?practice=practice&tab=coding

// Todo List

// You're given some existing HTML for a Todo List app. Add the following functionality to the app:

// Add new tasks on clicking the "Submit" button.
// The <input> field should be cleared upon successful addition.
// Remove tasks from the Todo List upon clicking the "Delete" button.

import "./styles.css";
import React, { useState } from "react";
import data from "./data.json";

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    const currList = [...list];
    setList([...currList, name]);
    setName("");
  };

  const deleteItem = (item) => {
    let currList = [...list];
    currList.splice(currList.indexOf(item), 1);
    setList(currList);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter list item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addItem}>Add item</button>
      <ul class="listItems">
        {list.map((item, index) => {
          return (
            <li key={index} className="listItem">
              <span>{item}</span>
              <button onClick={() => deleteItem(item)}>Delete item</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
