import React from "react";
import { useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { v4 as id } from "uuid";

const App = () => {
  const [initialState, setInitialState] = useState([]);

  const handleClick = (text) => {
    const data = {};

    data.text = text;
    data.isDone = false;
    data.id = id();

    setInitialState([...initialState, data]);
  };

  const handleCheck = (id) => {
    setInitialState(
      initialState.map((i) => {
        if (i.id === id) {
          return { text: i.text, isDone: !i.isDone, id: i.id };
        } else {
          return i;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setInitialState(initialState.filter((i) => i.id !== id));
  };

  console.log(initialState);

  const handleEdit = (id) => {
    let oldData = initialState.find((i) => i.id == id);
    const value = prompt("Enter New Value", oldData.text);
    if (value) {
      setInitialState(
        initialState.map((i) =>
          i.id === id ? { text: value, isDone: false, id: i.id } : i
        )
      );
    }
  };
  return (
    <div>
      <Form onSubmit={handleClick} />
      {initialState.map((i, index) => (
        <List
          key={index}
          data={i.text}
          id={i.id}
          isDone={i.isDone}
          onChecked={handleCheck}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default App;
