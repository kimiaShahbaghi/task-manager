import React from "react";
import "./List.scss";
import Card from "./Card";
import AddButton from "./AddButton";

const List = (props) => {
  const cards = props.cards;
  const listId = props.listId;
  console.log("key", listId);
  return (
    <div className="list">
      <h3>{props.title}</h3>
      {cards.map((card) => (
        <Card key={card.id} text={card.text}  />
      ))}
      <AddButton listsId={listId}/>
    </div>
  );
};

export default List;
