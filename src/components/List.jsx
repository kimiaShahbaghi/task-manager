import React, { useState } from "react";
import "./List.scss";
import Card from "./Card";
import AddButton from "./AddButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { deleteList, editTitle } from "../reducer/listSlice";
import TextareaAutosize from "react-textarea-autosize";

const List = (props) => {
  const dispatch = useDispatch();

  const [titleText, setTitleText] = useState(props.title);

  const cards = props.cards;
  const listId = props.listId;

  const deleteListHandler = () => {
    dispatch(deleteList(props.index));
  };
  const editTitleHandler = (event) => {
    setTitleText(event.target.value);
  };
  const changeTitleHandler = () => {
    dispatch(editTitle({ index: props.index, text: titleText }));
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
                    <div className="list__header">
                      <TextareaAutosize
                        value={titleText}
                        onChange={editTitleHandler}
                        onBlur={changeTitleHandler}
                        className="list__header__title"
                      />
                      <DeleteOutlineIcon
                        style={{ float: "right" }}
                        onClick={deleteListHandler}
                      />
                    </div>
                    {cards.map((card, index) => (
                      <Card
                        key={card.id}
                        index={index}
                        text={card.text}
                        id={card.id}
                        listIndex={props.index}
                        description={card.description}
                      />
                    ))}
                    <AddButton className="list__footer" listsId={listId} />
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
