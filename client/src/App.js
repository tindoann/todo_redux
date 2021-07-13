import "./App.css";
import React from "react";
import Input from "./components/Input";
import { useSelector } from "react-redux";
import { selectorTodoList } from "./features/todoSlice";

// const todoList = [
//   {
//     item: "todo",
//     done: false,
//     id: 23424,
//   },
//   {
//     item: "todo2",
//     done: true,
//     id: 23425,
//   },
// ];

const App = () => {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
      </div>
      <Input />
    </div>
  );
};

export default App;
