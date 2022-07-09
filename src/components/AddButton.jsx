import AddIcon from "@mui/icons-material/Add";
import { Card } from "@material-ui/core";
import TextareaAutosize from "react-textarea-autosize";
import React, { useState } from "react";
import "./AddButton.scss";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddButton = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const [textInput, setTextInput] = useState("");

  const openFormHandler = () => {
    setFormOpen(true);
  };
  const closeFormHandler = () => {
    setFormOpen(false);
  };

  const closeButtonText =
    props.type === "list" ? "Add another list" : "Add another Card";
  const className = props.type === "list" ? "list" : "card";
  const placeHolderText =
    props.type === "list"
      ? "Enter list title..."
      : "Enter a title for this card...";
  const openButtonTitle = props.type === "list" ? "Add List" : "Add Card";
  const textInputHandler = (event) => {
    setTextInput(event.target.value);
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
        <Button variant="contained" color="secondary">
          {openButtonTitle}
        </Button>
        <CloseIcon color="action" />
      </div>
    </div>
  );
  console.log("props");
  console.log("textinput", textInput);
  return formOpen ? openForm : closeForm;
};

export default AddButton;
