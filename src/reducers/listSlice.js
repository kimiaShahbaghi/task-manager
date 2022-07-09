import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lists:[
    {
        title:"ToDo",
        id: 0,
        cards: [
            {
                id:0,
                text: "learn typescript"
            },
            {
                id:1,
                text: 'learn api'
            }
        ]
    },{
        title:"Doing",
        id: 1,
        cards: [
            {
                id:0,
                text: "learn react"
            },
            {
                id:1,
                text: 'learn sass'
            },
            {
                id:2,
                text: 'learn tailwind'
            },  {
                id:3,
                text: 'learn bootstrap'
            }
        ]
    },
]
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = listSlice.actions
export const selectLists = (state) => state.listReducer.lists

export default listSlice.reducer