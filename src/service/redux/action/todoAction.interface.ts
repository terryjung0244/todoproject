import { AnyAction } from "@reduxjs/toolkit";
import { TODO_ACTION_CONST } from "service/const/actionConst";
import { TodoType } from "service/model/todo";

const { CREATE_TODO, SEND_EACH_SELECTED_ID } = TODO_ACTION_CONST;

export interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: TodoType;
}

export interface SendEachSelectedIdActionType {
  type: typeof SEND_EACH_SELECTED_ID;
  payload: string;
}

export type TodoActionsType =
  | CreateTodoActionType
  | SendEachSelectedIdActionType
  | AnyAction;
