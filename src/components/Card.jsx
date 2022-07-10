import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, Typography } from "@material-ui/core";
const Cards = (props) => {
  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card style={{ padding: 10 }}>
              <Typography>{props.text}</Typography>
            </Card>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Cards;
