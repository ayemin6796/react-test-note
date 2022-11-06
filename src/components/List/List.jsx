import React from "react";
import "./List.css";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const List = ({ data, isDone, onChecked, id, onDelete, onEdit }) => {
  //   const style = {
  //     bgStyle: {
  //       backgroundColor: "Grey",
  //       textDecoration: "line-through",
  //     },
  //   };

  const handleClick = () => {
    onChecked(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id);
  };
  return (
    <div className={`listContainer ${isDone ? "done" : null}`}>
      <div className="textContainer">
        <input checked={isDone} onChange={handleClick} type="checkbox" />
        <p>{data}</p>
      </div>
      <div className="btnContainer">
        <button onClick={handleDelete}>
          <BsTrash />
        </button>
        <button onClick={handleEdit}>
          <FiEdit />
        </button>
      </div>
    </div>
  );
};

export default List;
