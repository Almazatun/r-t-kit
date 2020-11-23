import React, {ChangeEvent} from 'react';
import {Button, Container, Grid, Input, Paper, TextField} from "@material-ui/core";
import {incChangeStartMax, SCOREBOARD_ON_CHANGE} from "../../redux/reducers/reducers/scoreboardReducer";

interface ISettingsBoard {
    start: number
    max: number
    onChangeStartValue: (value: number) => void
    onChangeMaxValue: (value: number) => void
    setValues: () => void
}
type ColorT = "secondary" | "primary" | undefined

export const SettingsBoard: React.FC<ISettingsBoard> = (props) => {

    function onChangeS(event: ChangeEvent<HTMLInputElement>) {
        props.onChangeStartValue(+event.target.value)
    }

    function onChangeM(event: ChangeEvent<HTMLInputElement>) {
        props.onChangeMaxValue(+event.target.value)
    }

    const inputBackground: string = props.start >= props.max ? 'pink' : ''
    const inputOut: ColorT = props.start >= props.max ? 'secondary' : "primary"

    return (
        <Container style={{marginTop: '30px'}} maxWidth="sm">
            <Paper elevation={3}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{margin: '10px 0'}}
                    >
                    <Grid >
                        <h3>Start value</h3>
                        <TextField type="number"
                                   value={props.start >= 0 ? props.start : 0}
                                   onChange={onChangeS}
                                   variant="outlined"
                                   color={inputOut}
                                   size={"medium"}
                                   style={{backgroundColor: inputBackground, marginRight: '20px'}}

                        />
                    </Grid>
                    <Grid>
                        <h3>Max value</h3>
                        <TextField type="number"
                                   value={props.max}
                                   onChange={onChangeM}
                                   variant="outlined"
                                   color={inputOut}
                                   style={{backgroundColor: inputBackground}}
                        />
                    </Grid>
                </Grid>
                    <Button onClick={props.setValues}
                            variant="contained"
                            color="primary"
                            disableElevation
                            style={{top: '50%', left: '40%', margin: '10px 0'}}


                    >
                        Set values
                    </Button>
            </Paper>
        </Container>
    )
}