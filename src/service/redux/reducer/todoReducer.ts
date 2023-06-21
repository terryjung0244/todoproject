import { produce } from "immer";
import { Reducer } from "redux";
import { TodoReducerState } from "./todoReducer.Interface";
import { TodoActionsType } from "../action/todoAction.interface";
import { TODO_ACTION_CONST } from "service/const/actionConst";
import { TodoType } from "service/model/todo";

const {
  CREATE_TODO,
  SEND_EACH_SELECTED_ID,
  MARK_AS_DONE,
  MARK_AS_NOT_DONE,
  DELETE,
  UPDATE,
} = TODO_ACTION_CONST;

const initialState: TodoReducerState = {
  todoList: [],
  selectedIdList: [],
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
        const indexResult: number = draft.selectedIdList.indexOf(
          action.payload
        );

        if (indexResult === -1) {
          draft.selectedIdList.push(action.payload);
        } else {
          draft.selectedIdList.splice(indexResult, 1); //2개의 id가 들어가지 않게 splice을 사용해서 제거하는 메소드.
        }
        break;

      case MARK_AS_DONE:
        const tempForMarkAsDone = draft.todoList.map((todo: TodoType) => {
          if (draft.selectedIdList.includes(todo.id)) {
            return { ...todo, isDone: true };
          } else {
            return { ...todo };
          }
        });
        draft.todoList = tempForMarkAsDone;
        break;

      case MARK_AS_NOT_DONE:
        const tempForMarkAsNotDone = draft.todoList.map((todo: TodoType) => {
          if (draft.selectedIdList.includes(todo.id)) {
            return { ...todo, isDone: false };
          } else {
            return { ...todo };
          }
        });
        draft.todoList = tempForMarkAsNotDone;
        break;

      case UPDATE:
        const { title, desc, id } = action.payload;
        console.log(title, desc, id); // New Update Inputs
        // index을 찾아서, 그 인덱스에 새로운 값을 넣어라.
        const updateIndex: number = draft.todoList.findIndex(
          (todo: TodoType) => todo.id === id
        );
        draft.todoList[updateIndex].title = title; //새로운값
        draft.todoList[updateIndex].desc = desc; //todoList에 [0]번째에 새로운 desc값을 넣는다.
        draft.selectedIdList = [];

        break;

      case DELETE:
        draft.selectedIdList.forEach((id: string) => {
          let index = draft.todoList.findIndex(
            //선택한 id값의 index을 찾아라
            (todo: TodoType) => todo.id === id
          );
          if (index !== -1) {
            draft.todoList.splice(index, 1);
          }
        });
        draft.selectedIdList = [];
        break;

      default:
        return state;
    }
  });
};
