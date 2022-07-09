import React from "react";
import "./List.scss";
import Card from "./Card";
import AddButton from "./AddButton";

const List = (props) => {
  const cards = props.cards;
  console.log("cards", cards);
  return (
    <div className="list">
      <h3>{props.title}</h3>
      {cards.map((card) => (
        <Card key={card.id} text={card.text} />
      ))}
      <AddButton />
    </div>
  );
};

export default List;
