import CreateTodo from "components/createTodo/CreateTodo";
import SelectTodo from "components/selectTodo/SelectTodo";
import ShowTodo from "components/showTodo/ShowTodo";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="createandselect-container">
        <CreateTodo />
        <SelectTodo />
      </div>

      <ShowTodo />
    </div>
  );
};

export default App;
