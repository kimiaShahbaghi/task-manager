import React from "react";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { selectLists } from "../reducer/listSlice";
import "./App.scss";
import AddButton from "./AddButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sortCrads } from "../reducer/listSlice";

const App = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectLists);

  const onDragEndHandler = (result) => {
    const { destination, source, type } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sortCrads({
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        type: type,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <div className="App">
        <p>trello</p>
        <Droppable droppableId="all-lists" direction="horizental" type="list">
          {(provided) => {
            return (
              <div
                className="App__container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lists.map((list, index) => (
                  <List
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    listId={list.id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <AddButton type="list" />
              </div>
            );
          }}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;
