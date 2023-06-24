import { TODO_ACTION_CONST } from "service/const/actionConst";
import { TodoType } from "service/model/todo";
import {
  CreateTodoActionType,
  DeleteActionType,
  MarkAsDoneActionType,
  MarkAsNotDoneActionType,
  SendAllSelectedIdActionType,
  SendEachSelectedIdActionType,
  UpdateActionType,
} from "./todoAction.interface";

const {
  CREATE_TODO,
  SEND_EACH_SELECTED_ID,
  SEND_ALL_SELECTED_ID,
  MARK_AS_DONE,
  MARK_AS_NOT_DONE,
  DELETE,
  UPDATE,
} = TODO_ACTION_CONST;

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

export const sendAllSelectedIdAction = (
  selectedId: string[]
): SendAllSelectedIdActionType => {
  return {
    type: SEND_ALL_SELECTED_ID,
    payload: selectedId,
  };
};

export const markAsDoneAction = (): MarkAsDoneActionType => {
  return {
    type: MARK_AS_DONE,
    payload: null,
  };
};

export const markAsNotDoneAction = (): MarkAsNotDoneActionType => {
  return {
    type: MARK_AS_NOT_DONE,
    payload: null,
  };
};

export const deleteAction = (): DeleteActionType => {
  return {
    type: DELETE,
    payload: null,
  };
};

export const updateAction = (input: Partial<TodoType>): UpdateActionType => {
  return {
    type: UPDATE,
    payload: input,
  };
};
