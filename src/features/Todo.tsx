import React, {ChangeEvent, useState} from 'react'
import {Button, Container, Grid, Paper, TextField} from "@material-ui/core";
import {TodoItem} from "../components/TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../redux/reducers/rootReduce";
import {addItem, changeStatus, deleteItem, IInitStateTodo} from "../redux/reducers/reducers/todoReducer";


export const Todo: React.FC = () => {

    const todoData = useSelector<RootStateType, IInitStateTodo>(state => state.todo)
    const dispatch = useDispatch()
    const [itemName, setItemName] = useState<string>('')

    function onChange (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>){
        setItemName(event.target.value)
    }

    function addNewItem(){
        if (itemName.trim() !== '') {
            dispatch(addItem({title: itemName}))
            setItemName('')
        } else {
            alert('field should be required 🤬🤬🤬')
        }
    }

    function deleteI(id: string){
        dispatch(deleteItem({id: id}))
    }

    function handleChangeStatus(id: string){
        dispatch(changeStatus({id: id}))
    }



    return (
        <Container style={{marginTop: '30px'}} maxWidth="sm">
            <Paper elevation={3} style={{padding: '20px'}}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{padding: '10px'}}
                >

                    <Grid>
                        <TextField type="text"
                                   value={itemName}
                                   onChange={onChange}
                                   variant="outlined"
                                   color={'primary'}
                                   size={"medium"}

                        />
                        <Button onClick={addNewItem}
                                variant="contained"
                                color="primary"
                                disableElevation
                                style={{margin: '10px 10px'}}
                        >
                            Add item
                        </Button>
                    </Grid>
                    <Grid color={'green'}>
                      <TodoItem items={todoData.arr}
                                delete={deleteI}
                                changeStatus={handleChangeStatus}
                      />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}