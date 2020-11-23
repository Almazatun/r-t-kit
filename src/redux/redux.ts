import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from "./reducers/rootReduce";

export const store = configureStore({
    reducer: rootReducer
})
