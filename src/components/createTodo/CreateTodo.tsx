import React, { useState } from "react";
import { TodoInput } from "./CreateTodo.interface";

const CreateTodo = () => {
  const [inputCreateTodo, setInputCreateTodo] = useState<TodoInput>({
    title: "",
    desc: "",
  });

  const createInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCreateTodo({ ...inputCreateTodo, [e.target.name]: e.target.value });
  };

  console.log(inputCreateTodo);

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
        placeholder="Title"
      />
    </div>
  );
};

export default CreateTodo;
