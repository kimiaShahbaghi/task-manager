import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, Typography } from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { deleteCard } from "../reducer/listSlice";

const Cards = (props) => {
  const dispatch = useDispatch();
  const deleteCardHandler = () => {
    dispatch(
      deleteCard({
        cardIndex: props.index,
        listIndex: props.listIndex,
      })
    );
  };
  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card style={{ padding: 10, height: "4rem" }}>
              <Typography>{props.text}</Typography>
              <ClearIcon
                style={{ float: "right", margin: 0 }}
                fontSize="small"
                onClick={deleteCardHandler}
              />
            </Card>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Cards;
