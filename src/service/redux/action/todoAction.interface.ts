import { AnyAction } from "@reduxjs/toolkit";
import { TODO_ACTION_CONST } from "service/const/actionConst";
import { TodoType } from "service/model/todo";

const {
  CREATE_TODO,
  SEND_EACH_SELECTED_ID,
  SEND_ALL_SELECTED_ID,
  MARK_AS_DONE,
  MARK_AS_NOT_DONE,
  DELETE,
  UPDATE,
} = TODO_ACTION_CONST;

export interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: TodoType;
}

export interface SendEachSelectedIdActionType {
  type: typeof SEND_EACH_SELECTED_ID;
  payload: string;
}

export interface SendAllSelectedIdActionType {
  type: typeof SEND_ALL_SELECTED_ID;
  payload: string;
}

export interface MarkAsDoneActionType {
  type: typeof MARK_AS_DONE;
  payload?: null;
}

export interface MarkAsNotDoneActionType {
  type: typeof MARK_AS_NOT_DONE;
  payload?: null;
}

export interface DeleteActionType {
  type: typeof DELETE;
  payload?: null;
}

export interface UpdateActionType {
  type: typeof UPDATE;
  payload: Partial<TodoType>;
}
export type TodoActionsType =
  | CreateTodoActionType
  | SendEachSelectedIdActionType
  | MarkAsDoneActionType
  | MarkAsNotDoneActionType
  | DeleteActionType
  | UpdateActionType
  | AnyAction;
