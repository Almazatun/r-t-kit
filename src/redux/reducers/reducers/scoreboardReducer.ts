import {createSlice} from '@reduxjs/toolkit'

export interface IInitState {
    value: number,
    max: number,
    increment: number | null
}


let initialState: IInitState = {
    value: 0,
    max: 1,
    increment: null
}

export enum SCOREBOARD_ON_CHANGE {
    ON_CHANGE_START = 'ON_CHANGE_START',
    ON_CHANGE_MAX = 'ON_CHANGE_MAX',
}

export const scoreboardSlice = createSlice({
    name: 'Scoreboard',
    initialState: initialState,
    reducers: {
        incChangeStartMax: (state, action: { payload: { type: SCOREBOARD_ON_CHANGE, value: number } }) => {
            if (action.payload.type === SCOREBOARD_ON_CHANGE.ON_CHANGE_START) {
                state.value = action.payload.value
                state.increment = null
            } else if (action.payload.type === SCOREBOARD_ON_CHANGE.ON_CHANGE_MAX)
                state.max = action.payload.value
            state.increment = null
        },

        setValues: (state, action: {payload: {value: number}}) => {
            state.increment = action.payload.value
        },
        incrementInc:(state) => {
            state.increment = state.increment! < state.max ? ++state.increment! : state.increment
        },
        resetInc: (state) => {
            state.increment = state.value
        }

    }
})

//export methods
export const {incChangeStartMax, setValues, incrementInc, resetInc} = scoreboardSlice.actions

export const scoreboardSR = scoreboardSlice.reducer