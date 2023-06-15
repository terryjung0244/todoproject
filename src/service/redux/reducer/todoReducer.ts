import { produce } from "immer";
import { Reducer } from "redux";
import { TodoReducerState } from "./todoReducer.Interface";
import { TodoActionsType } from "../action/todoAction.interface";
import { TODO_ACTION_CONST } from "service/const/actionConst";

const { CREATE_TODO, SEND_EACH_SELECTED_ID } = TODO_ACTION_CONST;

const initialState: TodoReducerState = {
  todoList: [],
};

export const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREATE_TODO:
        console.log(action.payload);
        draft.todoList.push(action.payload); // push data into todoList[]
        break;
      case SEND_EACH_SELECTED_ID:
        console.log("1");

        break;
      default:
        return state;
    }
  });
};
