import React from 'react'
import {Button, Container, Grid, Paper} from "@material-ui/core";

interface IIncBoard {
    start: number
    max: number
    inc: number | null
    increment: Function
    reset: Function
}

export const IncBoard: React.FC<IIncBoard> = (props) => {

    const decision = props.start >= props.max ? 'Incorrect value' : 'Please set value 💚'

    const baseView = props.inc !== null ? props.inc : decision


    return (
        <Container style={{marginTop: '30px'}} maxWidth="sm">
            <Paper elevation={3}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{margin: '10px 0'}}
                >
                    <h2>{baseView}</h2>

                    <Button onClick={() => props.increment()}
                            variant="contained"
                            color="primary"
                            disableElevation
                            style={{margin: '20px'}}


                    >
                        Inc
                    </Button>
                    <Button onClick={() => props.reset()}
                            variant="contained"
                            color="primary"
                            disableElevation
                            style={{margin: '10px 0'}}


                    >
                        Reset
                    </Button>
                </Grid>
            </Paper>
        </Container>
    )
}