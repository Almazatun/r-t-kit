import {combineReducers} from "@reduxjs/toolkit";
import {scoreboardSR} from "./reducers/scoreboardReducer";


export const rootReducer = combineReducers({
    scoreboard: scoreboardSR
})

export type RootStateType = ReturnType<typeof rootReducer>

