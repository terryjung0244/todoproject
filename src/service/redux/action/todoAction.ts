import { TODO_ACTION_CONST } from "service/const/actionConst";
import { TodoType } from "service/model/todo";
import {
  CreateTodoActionType,
  SendEachSelectedIdActionType,
} from "./todoAction.interface";

const { CREATE_TODO, SEND_EACH_SELECTED_ID } = TODO_ACTION_CONST;

export const createTodoAction = (
  inputCreateTodo: TodoType
): CreateTodoActionType => {
  return {
    type: CREATE_TODO,
    payload: inputCreateTodo,
  };
};

export const sendEachSelectedIdAction = (
  selectedId: string
): SendEachSelectedIdActionType => {
  return {
    type: SEND_EACH_SELECTED_ID,
    payload: selectedId,
  };
};
