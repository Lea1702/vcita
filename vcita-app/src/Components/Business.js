import React from "react";
import DeleteButton from "./DeleteButton";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';

export function BusinessItem(props) {
    return (
        <td>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.name} secondary={props.email +"\n" + props.created_at}  />
                <DeleteButton  onDelete={props.onDelete} uid={props.uid} getBusinesses={props.getBusinesses}/>
            </ListItem>
            <Divider variant="inset" />
        </td>
    );
}