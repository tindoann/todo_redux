import React from "react";
import checkbox from "@material-ui/core/Checkbox";

const handleCheck = () => {};

const TodoItem = ({ name, done, id }) => {
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />

      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
