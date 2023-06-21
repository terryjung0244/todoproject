import { TodoInput } from "components/createTodo/CreateTodo.interface";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SELECT_CONST } from "service/const/selectConst";
import {
  deleteAction,
  markAsDoneAction,
  markAsNotDoneAction,
  updateAction,
} from "service/redux/action/todoAction";
import { useAppDispatch, useAppSelector } from "service/store";

const { SELECT, MARK_AS_DONE, MARK_AS_NOT_DONE, UPDATE, DELETE } = SELECT_CONST;

const SelectTodo = () => {
  const dispatch = useAppDispatch();

  const [show, setShow] = useState<boolean>(false);
  const [updateInput, setUpdateInput] = useState<TodoInput>({
    title: "",
    desc: "",
  });
  const { selectedIdList } = useAppSelector((state) => state.todoReducer);

  const showModal = (modalBoolean: boolean) => {
    setShow(modalBoolean);
  };

  const newUpdateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateInput({ ...updateInput, [e.target.name]: e.target.value });
  };

  const submitButton = () => {
    const { title, desc } = updateInput;
    if (!title || !desc) {
      alert("Type a new update ");
      return;
    }
    dispatch(updateAction({ ...updateInput, id: selectedIdList[0] }));
  };

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    switch (value) {
      case MARK_AS_DONE:
        dispatch(markAsDoneAction());
        break;
      case MARK_AS_NOT_DONE:
        dispatch(markAsNotDoneAction());
        break;
      case UPDATE:
        showModal(true);
        break;
      case DELETE:
        dispatch(deleteAction());
        break;
    }
  };

  if (selectedIdList.length === 0) {
    return null;
  } else {
    return (
      <div>
        <select defaultValue={SELECT} onChange={selectOption}>
          <option value={SELECT} disabled hidden>
            Select
          </option>
          <option value={MARK_AS_DONE}>Mark As Done</option>
          <option value={MARK_AS_NOT_DONE}>Mark As Not Done</option>
          {selectedIdList.length === 1 ? (
            <option value={UPDATE}>Update</option>
          ) : null}
          <option value={DELETE}>Delete</option>
        </select>

        <Modal show={show} onHide={() => showModal(false)}>
          <input
            name={"title"}
            value={updateInput.title}
            placeholder="New Update Title"
            onChange={newUpdateInput}
          />
          <input
            name={"desc"}
            value={updateInput.desc}
            placeholder="New Update Desc"
            onChange={newUpdateInput}
          />
          <button onClick={submitButton}>Submit</button>
        </Modal>
      </div>
    );
  }
};

export default SelectTodo;
