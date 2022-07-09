import React from "react";
import List from "./List";
import { useSelector } from "react-redux";
import { selectLists } from "../reducers/listSlice";
import "./App.scss";
import AddButton from "./AddButton";

const App = () => {
  const lists = useSelector(selectLists);
  console.log("lists", lists);
  return (
    <div className="App">
      <p>trello</p>
      <div className="App__container">
        {lists.map((list) => (
          <List key={list.id} title={list.title} cards={list.cards} />
        ))}
        <AddButton type="list" />
      </div>
    </div>
  );
};

export default App;