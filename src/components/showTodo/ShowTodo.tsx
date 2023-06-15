import React from "react";
import "./ShowTodo.css";
import { useAppSelector } from "service/store";

const ShowTodo = () => {
  const { todoList } = useAppSelector((state) => state.todoReducer);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>check</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>B</td>
            <td>C</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowTodo;
