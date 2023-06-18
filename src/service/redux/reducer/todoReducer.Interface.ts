import { TodoType } from "../../model/todo";

export interface TodoReducerState {
  todoList: TodoType[];
  selectedIdList: string[];
}
