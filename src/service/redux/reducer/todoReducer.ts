import { produce } from "immer";
import { Reducer } from "redux";
import { TodoReducerState } from "./todoReducer.Interface";
import { TodoActionsType } from "../action/todoAction.interface";
import { TODO_ACTION_CONST } from "service/const/actionConst";

const { CREATE_TODO, SEND_EACH_SELECTED_ID } = TODO_ACTION_CONST;

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
      default:
        return state;
    }
  });
};

// const animal2 = [
//   {
//     name: "rabbit",
//     age: 1,
//   },
//   {
//     name: "tiger",
//     age: 2,
//   },
//   {
//     name: "cat",
//     age: 3,
//   },
//   {
//     name: "dog",
//     age: 4,
//   },
// ];

// let index = animal2.findIndex((el) => el.id === isAction.payload);
// animal2.splice(index, 1);
// console.log(animal2);

// const newnewAnimal = animal2.filter((animal) => {
//   return animal.name.includes("t");
// });
// console.log(newnewAnimal);

// const newAnimal = animal2.map((animal, index) => {
//   return {
//     ...animal,
//     id: `${index}_${animal.name}`,
//   };
// });

// console.log(newAnimal);
