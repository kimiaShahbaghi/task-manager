import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, TextareaAutosize, Typography } from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { deleteCard, setDescription } from "../reducer/listSlice";
import "./Card.scss";

const Cards = (props) => {
  const dispatch = useDispatch();
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionText, setDescriptionText] = useState(props.descriptions);

  const deleteCardHandler = () => {
    dispatch(
      deleteCard({
        cardIndex: props.index,
        listIndex: props.listIndex,
      })
    );
  };
  const cardClickHandler = () => {
    setShowDescription(!showDescription);
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
  };

  const descriptionForm = (
    <TextareaAutosize

      onChange={descriptionTextHandler}
      onBlur={setDescriptionTextHandler}
      value={descriptionText}
      autoFocus
    />
  );

  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card className={props.description ? "card border-card" : "card"} onClick={cardClickHandler}>
              <Typography>{props.text}</Typography>
              <ClearIcon
                style={{ float: "right", margin: 0 }}
                fontSize="small"
                onClick={deleteCardHandler}
              />
              {showDescription && descriptionForm}
            </Card>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Cards;
