import AddIcon from "@mui/icons-material/Add";
import { Card } from "@material-ui/core";
import TextareaAutosize from "react-textarea-autosize";
import React, { useState } from "react";
import "./AddButton.scss";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addList, addCard } from "../reducer/listSlice";

const AddButton = (props) => {
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState(false);
  const [textInput, setTextInput] = useState("");

  const isList = props.type === "list" ? true : false;
  const listId = props.listsId;

  const openFormHandler = () => {
    setFormOpen(true);
  };
  const closeFormHandler = () => {
    setFormOpen(false);
    setTextInput("");
  };

  const closeButtonText = isList ? "Add another list" : "Add another Card";
  const className = isList ? "list" : "card";
  const placeHolderText = isList
    ? "Enter list title..."
    : "Enter a title for this card...";
  const openButtonTitle = isList ? "Add List" : "Add Card";
  const textInputHandler = (event) => {
    setTextInput(event.target.value);
  };

  const addListHandler = () => {
    if (textInput) {
      dispatch(addList(textInput));
      setTextInput("");
    } else return;
  };

  const addCardHandler = () => {
    if (textInput) {
      dispatch(addCard({ text: textInput, id: listId }));
      setTextInput("");
    } else return;
  };

  const closeForm = (
    <div
      className={`closeForm closeForm__${className}`}
      onClick={openFormHandler}
    >
      <AddIcon />
      <span> {closeButtonText}</span>
    </div>
  );

  const openForm = (
    <div>
      <Card className="openForm">
        <TextareaAutosize
          placeholder={placeHolderText}
          autoFocus
          onBlur={closeFormHandler}
          value={textInput}
          onChange={textInputHandler}
        />
      </Card>
      <div className="openForm__footer">
        <Button
          variant="contained"
          color="secondary"
          onMouseDown={isList ? addListHandler : addCardHandler}
        >
          {openButtonTitle}
        </Button>
        <CloseIcon color="action" onClick={closeFormHandler} />
      </div>
    </div>
  );

  return formOpen ? openForm : closeForm;
};

export default AddButton;
