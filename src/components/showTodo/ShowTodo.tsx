import React from "react";
import "./ShowTodo.css";
import { useAppDispatch, useAppSelector } from "service/store";
import { TodoType } from "service/model/todo";
import {
  sendAllSelectedIdAction,
  sendEachSelectedIdAction,
} from "service/redux/action/todoAction";

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList, selectedIdList } = useAppSelector(
    (state) => state.todoReducer
  );

  const todoEachBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      dispatch(sendEachSelectedIdAction(value));
    }
  };

  const todoAllCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target; // true

    if (checked) {
      const selectedAllId: string[] = todoList.map((todo: TodoType) => todo.id); //the values is made into an array
      dispatch(sendAllSelectedIdAction(selectedAllId));
    } else {
      dispatch(sendAllSelectedIdAction([]));
    }
  };

  console.log(todoList);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedIdList.length > 0 ? true : false}
                onChange={todoAllCheckBox}
              />
            </th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo: TodoType) => {
            return (
              <tr key={todo.id}>
                <td>
                  <input
                    type="checkbox"
                    value={todo.id}
                    checked={selectedIdList.includes(todo.id)}
                    onChange={todoEachBox}
                  />
                </td>
                <td
                  style={{
                    textDecoration: todo.isDone ? "line-through" : "unset",
                  }}
                >
                  {todo.title}
                </td>
                <td
                  style={{
                    textDecoration: todo.isDone ? "line-through" : "unset",
                  }}
                >
                  {todo.desc}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTodo;
