import React, {useState} from 'react'
import {Button, Container, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";

export const Navbar: React.FC = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container style={{marginTop: '30px'}} maxWidth="lg">
            <Button color={"secondary"} aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    variant="contained"

            >
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/scoreboard">Scoreboard</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/todo">To-do</Link>
                </MenuItem>
            </Menu>
        </Container>
    )
}