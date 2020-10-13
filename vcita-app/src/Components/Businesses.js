import React from "react";
import "./style.css"
import {BusinessItem} from "./Business";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { getBusinesses, onDelete} from "../Store/actions";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const BusinessList = (props) => {
    const classes = useStyles();
    return (
        <div>
            <List className={classes.root}>
                <ul>
                    {props.businesses.map((business) =>

                        <div key={business.uid}>
                            <BusinessItem name={business.name} email={business.email} uid={business.uid}
                                      created_at={business.created_at} plan={business.plan}
                                        onDelete={props.onDelete} getBusinesses={props.getBusinesses}
                            />
                        </div>)
                    }
                </ul>
            </List>
        </div>
    )
};


class Businesses extends React.Component {
    render(){
        return (
            <div>
                <Link to="/create">NEW CLIENT ACCOUNT</Link>
                <h2>Businesses list :</h2>
                <BusinessList businesses={this.props.businesses} onDelete={this.props.onDelete} getBusinesses={this.props.getBusinesses}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        businessesLength: state.businesses.length,
        businesses: state.businesses
    }
};

export default connect(mapStateToProps, {onDelete, getBusinesses})(Businesses);