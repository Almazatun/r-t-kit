import {combineReducers} from "@reduxjs/toolkit";
import {scoreboardSR} from "./reducers/scoreboardReducer";
import {todoSR} from "./reducers/todoReducer";


export const rootReducer = combineReducers({
    scoreboard: scoreboardSR,
    todo: todoSR
})

export type RootStateType = ReturnType<typeof rootReducer>

