import React from "react";
import "./ShowTodo.css";
import { useAppDispatch, useAppSelector } from "service/store";
import { TodoType } from "service/model/todo";
import { sendEachSelectedIdAction } from "service/redux/action/todoAction";

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList, selectedIdList } = useAppSelector(
    (state) => state.todoReducer
  );

  console.log(todoList);

  const selectedIdCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const { value } = e.target;
    if (value) {
      dispatch(sendEachSelectedIdAction(value));
    }
  };

  console.log(selectedIdList);

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
          {todoList.map((todo: TodoType) => {
            return (
              <tr key={todo.id}>
                <td>
                  <input
                    type="checkbox"
                    value={todo.id}
                    checked={selectedIdList.includes(todo.id)}
                    onChange={selectedIdCheckBox}
                  />
                  {todo.id}
                </td>
                <td>{todo.title}</td>
                <td>{todo.desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTodo;
