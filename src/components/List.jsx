import React from "react";
import "./List.scss";
import Card from "./Card";
import AddButton from "./AddButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { deleteList } from "../reducer/listSlice";

const List = (props) => {
  const dispatch = useDispatch();

  const cards = props.cards;
  const listId = props.listId;

  const deleteListHandler = () => {
    dispatch(deleteList(props.index));
  };

  return (
    <Draggable draggableId={String(listId)} index={props.index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className="list"
          >
            <Droppable droppableId={String(listId)}>
              {(provided) => {
                return (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <h3 style={{ display: "inline-block" }}>{props.title}</h3>
                    <DeleteOutlineIcon
                      style={{ float: "right" }}
                      onClick={deleteListHandler}
                    />
                    {cards.map((card, index) => (
                      <Card
                        key={card.id}
                        index={index}
                        text={card.text}
                        id={card.id}
                        listIndex={props.index}
                      />
                    ))}
                    <AddButton listsId={listId} />
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};

export default List;
