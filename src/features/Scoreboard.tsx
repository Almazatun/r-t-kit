import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../redux/reducers/rootReduce";
import {
    IInitState,
    incChangeStartMax,
    incrementInc,
    resetInc,
    SCOREBOARD_ON_CHANGE,
    setValues
} from "../redux/reducers/reducers/scoreboardReducer";
import {SettingsBoard} from "../components/SettingsBoard/SettingsBoard";
import {IncBoard} from "../components/IncBoard/IncBoard";

export const Scoreboard: React.FC = () => {

    const scoreboardData = useSelector<RootStateType, IInitState>(state => state.scoreboard)
    const dispatch = useDispatch()

    function onChangeStartValue(value: number){
        dispatch(incChangeStartMax({type: SCOREBOARD_ON_CHANGE.ON_CHANGE_START, value: value}))
    }

    function onChangeMaxValue(value: number){
        dispatch(incChangeStartMax({type: SCOREBOARD_ON_CHANGE.ON_CHANGE_MAX, value: value}))
    }

    function setValue (){
        dispatch(setValues({value: scoreboardData.value}))
    }

    function increment() {
        dispatch(incrementInc())
    }

    function reset(){
        dispatch(resetInc())
    }

    return (
        <div>
            <SettingsBoard start={scoreboardData.value}
                           max={scoreboardData.max}
                           onChangeStartValue={onChangeStartValue}
                           onChangeMaxValue={onChangeMaxValue}
                           setValues={setValue}
            />
            <IncBoard start={scoreboardData.value}
                      max={scoreboardData.max}
                      inc={scoreboardData.increment}
                      increment={increment}
                      reset={reset}

            />
        </div>
    )
}