import React from "react";
import "./List.scss";
import Card from "./Card";
import AddButton from "./AddButton";
import { Droppable } from "react-beautiful-dnd";

const List = (props) => {
  const cards = props.cards;
  const listId = props.listId;
  console.log("key", listId);
  return (
    <Droppable droppableId={String(listId)}>
      {(provided) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="list"
          >
            <h3>{props.title}</h3>
            {cards.map((card, index) => (
              <Card key={card.id} index={index} text={card.text} id={card.id} />
            ))}
            <AddButton listsId={listId} />
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default List;
