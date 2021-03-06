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
          description: "HELLO THERE!",
        },
        {
          id: `card-${1}`,
          text: "learn api",
          description: "",
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
          description: "",
        },
        {
          id: `card-${3}`,
          text: "learn sass",
          description: "",
        },
        {
          id: `card-${4}`,
          text: "learn tailwind",
          description: "",
        },
        {
          id: `card-${5}`,
          text: "learn bootstrap",
          description: "",
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
      ++listId;
      state.lists = [...state.lists, newList];
    },
    addCard: (state, action) => {
      const newCard = {
        id: `card-${cardId}`,
        text: action.payload.text,
        description: "",
      };
      ++cardId;
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
        type,
      } = action.payload;

      if (type === "list") {
        const list = state.lists.splice(droppableIndexStart, 1);
        state.lists.splice(droppableIndexEnd, 0, ...list);
      }

      if (droppableIdStart === droppableIdEnd && type !== "list") {
        const list = state.lists.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.lists.find(
          (list) => droppableIdStart === list.id
        );
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.lists.find((list) => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
    },
    deleteList: (state, action) => {
      state.lists.splice(action.payload, 1);
    },
    deleteCard: (state, action) => {
      const listIndex = action.payload.listIndex;
      const cardIndex = action.payload.cardIndex;
      state.lists[listIndex].cards.splice(cardIndex, 1);
    },
    editTitle: (state, action) => {
      state.lists[action.payload.index].title = action.payload.text;
    },
    setDescription: (state, action) => {
      state.lists[action.payload.listIndex].cards[
        action.payload.cardIndex
      ].description = action.payload.text;
    },
  },
});

export const {
  addList,
  addCard,
  sortCrads,
  deleteList,
  deleteCard,
  editTitle,
  setDescription,
} = listSlice.actions;

export const selectLists = (state) => state.listReducer.lists;

export default listSlice.reducer;
