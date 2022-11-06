import React from "react";
import "./Form.css";
import { useRef } from "react";

const Form = ({ onSubmit }) => {
  const inputRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    onSubmit(inputRef.current.value);
    inputRef.current.value = null;
  };

  return (
    <div>
      <form action="" className="formContainer">
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default Form;
