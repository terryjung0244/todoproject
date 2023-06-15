import React, { useState } from "react";
import { TodoInput } from "./CreateTodo.interface";
import { useDispatch } from "react-redux";
import { createTodoAction } from "service/redux/action/todoAction";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const [inputCreateTodo, setInputCreateTodo] = useState<TodoInput>({
    title: "",
    desc: "",
  });

  const createInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { title, desc } = inputCreateTodo;
    // if (!title || !desc) {
    //   alert("Create todo fill in the blank");
    //   return; // return을 적지않으면, 아래로 진행된다.
    // }
    setInputCreateTodo({ ...inputCreateTodo, [e.target.name]: e.target.value });
  };

  const sendTodoData = (inputCreateTodo: TodoInput) => {
    dispatch(createTodoAction(inputCreateTodo));
    // setInputCreateTodo({ ...inputCreateTodo, title: "", desc: "" });
  };

  return (
    <div>
      <input
        name={"title"}
        value={inputCreateTodo.title}
        onChange={createInputTodo}
        placeholder="Title"
      />
      <input
        name={"desc"}
        value={inputCreateTodo.desc}
        onChange={createInputTodo}
        placeholder="Description"
      />
      <button onClick={() => sendTodoData(inputCreateTodo)}>Create</button>
    </div>
  );
};

export default CreateTodo;
