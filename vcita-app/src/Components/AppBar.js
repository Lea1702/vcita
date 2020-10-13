import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

export class MenuBar extends React.Component {
    render(){
        return (
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" >
                            Books shop
                        </Typography>

                        <Link to="/">Client Accounts</Link>
                    </Toolbar>
                </AppBar>
        )
    }
}
