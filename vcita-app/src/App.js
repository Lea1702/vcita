import React from "react"
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import * as actionCreator from "./Store/actions"
import {connect} from "react-redux";
import {MenuBar} from "./Components/AppBar";
import CreateBusiness from "./Components/CreateBusiness";
import Businesses from "./Components/Businesses";
import "./Components/appBar.css"

class App extends React.Component {
    componentDidMount() {
        this.props.getBusinesses();
    };

    render() {
        return (
            <Router>
                <div id="wrapper">

                    <div id="sidebar-wrapper">
                <MenuBar/>
                    </div>
                </div>
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                    <Route exact path="/" >
                        <Businesses businessLength={this.props.businesses.length} />
                    </Route>
                    <Route path="/create" >
                        <CreateBusiness createPending={this.props.createPending}  createBusiness={this.props.createBusiness} getBusinesses={this.props.getBusinesses}/>
                    </Route>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
        createPending : state.createPending
    }
};

const mapDispatchToProps = dispatch => {
    return{
        getBusinesses:  () => dispatch(actionCreator.getBusinesses()),
        createBusiness: (business) => dispatch(actionCreator.onCreate(business))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)