import { TODO_ACTION_CONST } from "service/const/actionConst";
import { TodoType } from "service/model/todo";
import { CreateTodoActionType } from "./todoAction.interface";

const { CREATE_TODO } = TODO_ACTION_CONST;

export const createTodoAction = (
  inputCreateTodo: TodoType
): CreateTodoActionType => {
  return {
    type: CREATE_TODO,
    payload: inputCreateTodo,
  };
};
