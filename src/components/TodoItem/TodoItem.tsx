import Paper from '@material-ui/core/Paper';
import React from 'react'
import {ITodoItem} from "../../redux/reducers/reducers/todoReducer";

interface TodoItem {
    items: Array<ITodoItem>
    delete: (id: string) => void
    changeStatus: (id: string) => void
}

export const TodoItem: React.FC<TodoItem> = (props) => {

    const itemsTSX = props.items.map(i => {

        const styleStatus = i.isDone ? 'pink line-through' : ''

        return (
            <div key={i.id} onDoubleClick={() => props.delete(i.id)}
            onClick={() => props.changeStatus(i.id)}
            >
                <span style={{cursor: 'pointer',
                    fontSize: '24px',
                    textDecoration: styleStatus
                }}>{i.name}</span>
            </div>
        )
    })

    return <Paper elevation={2} style={{padding: '20px', marginTop: '20px'}}>{itemsTSX}</Paper>
}