import React from "react";
import "./style.css"
import {connect} from "react-redux";
import {onDelete, getBusinesses} from "../Store/actions";
import DeleteButton from "./DeleteButton"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';



export function BusinessItem(props) {
    return (
        <div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.name} secondary={props.email +"\n" + props.created_at}  />
                <DeleteButton  onDelete={props.onDelete} getBusinesses={props.getBusinesses}/>
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
    );
}



class Business extends React.Component {

    render(){
        return (
            <div>
                {this.props.name}
                {this.props.email}
                {this.props.created_at}
                {this.props.plan}
                <DeleteButton uid={this.props.uid} onDelete={this.props.onDelete} getBusinesses={this.props.getBusinesses}/>
            </div>
        )
    }
}


export default connect(null, {onDelete, getBusinesses})(Business);