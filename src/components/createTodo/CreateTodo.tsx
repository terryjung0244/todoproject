import React, { useState } from "react";
import { TodoInput } from "./CreateTodo.interface";
import { useDispatch } from "react-redux";
import { createTodoAction } from "service/redux/action/todoAction";
import { getNanoid } from "service/util/nanoid";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const [inputCreateTodo, setInputCreateTodo] = useState<TodoInput>({
    title: "",
    desc: "",
  });

  // onChange
  const createInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCreateTodo({ ...inputCreateTodo, [e.target.name]: e.target.value });
  };

  // onClick
  const sendTodoData = (inputCreateTodo: TodoInput) => {
    const { title, desc } = inputCreateTodo;
    if (!title || !desc) {
      alert("Create todo fill in the blanks");
      return; // return을 적지않으면, 아래로 진행된다.
    }
    dispatch(
      createTodoAction({
        ...inputCreateTodo,
        id: getNanoid(),
      })
    );
    setInputCreateTodo({ ...inputCreateTodo, title: "", desc: "" });
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
