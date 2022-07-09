import { cardMediaClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      title: "ToDo",
      id: 0,
      cards: [
        {
          id: 0,
          text: "learn typescript",
        },
        {
          id: 1,
          text: "learn api",
        },
      ],
    },
    {
      title: "Doing",
      id: 1,
      cards: [
        {
          id: 0,
          text: "learn react",
        },
        {
          id: 1,
          text: "learn sass",
        },
        {
          id: 2,
          text: "learn tailwind",
        },
        {
          id: 3,
          text: "learn bootstrap",
        },
      ],
    },
  ],
};
let listId = 2;
let cardId = 4;

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state, action) => {
      const newList = {
        title: action.payload,
        id: listId,
        cards: [],
      };
      listId++;
      state.lists = [...state.lists, newList];
    },
    addCard: (state, action) => {
      console.log("add card action", action);
      const newCard = {
        id: cardId,
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
  },
});


export const { addList, addCard } = listSlice.actions;
export const selectLists = (state) => state.listReducer.lists;

export default listSlice.reducer;
