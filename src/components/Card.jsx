import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, TextareaAutosize, Typography, Button } from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { deleteCard, setDescription } from "../reducer/listSlice";
import "./Card.scss";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Cards = (props) => {
  const dispatch = useDispatch();

  const [descriptionText, setDescriptionText] = useState(props.description);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const deleteCardHandler = () => {
    dispatch(
      deleteCard({
        cardIndex: props.index,
        listIndex: props.listIndex,
      })
    );
  };

  const descriptionTextHandler = (event) => {
    setDescriptionText(event.target.value);
  };
  const setDescriptionTextHandler = () => {
    dispatch(
      setDescription({
        listIndex: props.listIndex,
        cardIndex: props.index,
        text: descriptionText,
      })
    );
    setModalIsOpen(false);
  };

  return (
    <>
      <Draggable draggableId={String(props.id)} index={props.index}>
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Card
                className={props.description ? "card border-card" : "card"}
                onClick={openModal}
              >
                <Typography style={{ wordBreak: "break-word" }}>
                  {props.text}
                </Typography>
                <ClearIcon
                  className="delete_card"
                  fontSize="small"
                  onClick={deleteCardHandler}
                />
              </Card>
            </div>
          );
        }}
      </Draggable>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <div className="modal__container">
          <div>
            <h3> card text:</h3>
            <p>{props.text}</p>
          </div>
          <div>
            <h3>Add description:</h3>
            <TextareaAutosize
              placeholder="Add a more detailed description"
              onChange={descriptionTextHandler}
              value={descriptionText}
            />
          </div>
          <Button variant="contained" onClick={setDescriptionTextHandler}>
            Save!
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Cards;
