import {createSlice} from '@reduxjs/toolkit'
import {v1} from 'uuid';

export interface IInitStateTodo {
    arr: Array<ITodoItem>
}

export interface ITodoItem {
    id: string
    name: string
    isDone: boolean
}


let initialState: IInitStateTodo = {
    arr: [
        {id: v1(), name: 'item 1', isDone: false},
        {id: v1(), name: 'item 2', isDone: true},
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addItem: (state, action: { payload: { title: string } }) => {
            state.arr.push({id: v1(), name: action.payload.title, isDone: false})
        },
        deleteItem: (state, action: { payload: { id: string } }) => {
            state.arr = state.arr.filter(i =>  i.id !== action.payload.id)
        },
        changeStatus: (state, action: { payload: { id: string } }) => {
            state.arr = state.arr.map(e => e.id !== action.payload.id ? e : {...e, isDone: !e.isDone})
        }
    }
})

//export methods
export const {addItem, deleteItem, changeStatus} = todoSlice.actions

export const todoSR = todoSlice.reducer