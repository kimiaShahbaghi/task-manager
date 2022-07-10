import React from "react";
import "./List.scss";
import Card from "./Card";
import AddButton from "./AddButton";
import { Droppable, Draggable } from "react-beautiful-dnd";

const List = (props) => {
  const cards = props.cards;
  const listId = props.listId;

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
                    <h3>{props.title}</h3>
                    {cards.map((card, index) => (
                      <Card
                        key={card.id}
                        index={index}
                        text={card.text}
                        id={card.id}
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
