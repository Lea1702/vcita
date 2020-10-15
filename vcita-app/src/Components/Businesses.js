import React from "react";
import "./style.css"
import {connect} from "react-redux";
import { getBusinesses, onDelete} from "../Store/actions";
import NewBusinessList from "./BusinessList";
import Sort from './Sort';
import Button from '@material-ui/core/Button';
import '@fortawesome/fontawesome-free/css/all.css';

class Businesses extends React.Component {
    render(){
        return (
            <div>
                <Button className="new-account" variant="contained" href="/create" >
                    NEW CLIENT ACCOUNT
                </Button>
                <h2 className="sansserif">Client Accounts</h2>
                <Sort getBusinesses={this.props.getBusinesses} />
                {!this.props.businessesPending ?
                    <NewBusinessList businesses={this.props.businesses} onDelete={this.props.onDelete}
                                     getBusinesses={this.props.getBusinesses}/> :
                    <i className="fas fa-circle-notch fa-spin loading"/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        businessesLength: state.businesses.length,
        businessesPending: state.businessesPending,
        businesses: state.businesses
    }
};

export default connect(mapStateToProps, {onDelete, getBusinesses})(Businesses);