import { AnyAction } from "@reduxjs/toolkit";
import { TODO_ACTION_CONST } from "service/const/actionConst";
import { TodoType } from "service/model/todo";

const { CREATE_TODO } = TODO_ACTION_CONST;

export interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: TodoType;
}

export type TodoActionsType = CreateTodoActionType | AnyAction;
