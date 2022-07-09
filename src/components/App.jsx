import React from "react";
import List from "./List";
import { useSelector } from "react-redux";
import { selectLists } from "../reducers/listSlice";
import "./App.scss";
import AddButton from "./AddButton";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const lists = useSelector(selectLists);
  const onDragEndHandler = () => {
    
  }

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <div className="App">
        <p>trello</p>
        <div className="App__container">
          {lists.map((list) => (
            <List
              key={list.id}
              title={list.title}
              cards={list.cards}
              listId={list.id}
            />
          ))}
          <AddButton type="list" />
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
