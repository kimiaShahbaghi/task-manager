import { cardMediaClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      title: "ToDo",
      id: `list-${0}`,
      cards: [
        {
          id: `card-${0}`,
          text: "learn typescript",
        },
        {
          id: `card-${1}`,
          text: "learn api",
        },
      ],
    },
    {
      title: "Doing",
      id: `list-${1}`,
      cards: [
        {
          id: `card-${2}`,
          text: "learn react",
        },
        {
          id: `card-${3}`,
          text: "learn sass",
        },
        {
          id: `card-${4}`,
          text: "learn tailwind",
        },
        {
          id: `card-${5}`,
          text: "learn bootstrap",
        },
      ],
    },
  ],
};
let listId = 2;
let cardId = 6;

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state, action) => {
      const newList = {
        title: action.payload,
        id: `list-${listId}`,
        cards: [],
      };
      listId++;
      state.lists = [...state.lists, newList];
    },
    addCard: (state, action) => {
      console.log("add card action", action);
      const newCard = {
        id: `list-${cardId}`,
        text: action.payload.text,
      };
      cardId++;
      const newState = state.lists.map((list) => {
        if (list.id === action.payload.id) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else return list;
      });
      state.lists = newState;
    },
    sortCrads: (state, action) => {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
      } = action.payload;
      
      if(droppableIdStart === droppableIdEnd){
        const list = state.lists.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart,1);
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }
    },
  },
});

export const { addList, addCard, sortCrads } = listSlice.actions;
export const selectLists = (state) => state.listReducer.lists;

export default listSlice.reducer;
