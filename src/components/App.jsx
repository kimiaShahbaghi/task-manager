import React from "react";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { selectLists } from "../reducer/listSlice";
import "./App.scss";
import AddButton from "./AddButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sortCrads } from "../reducer/listSlice";

const App = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectLists);

  const onDragEndHandler = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sortCrads({
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        draggableId: draggableId,
      })
    );
  };

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
