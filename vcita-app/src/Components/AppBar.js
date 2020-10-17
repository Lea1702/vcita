import React from 'react';
import {Link} from "react-router-dom";
import "./appBar.css";
import "./style.css";
import logo from '../static/icon.png';

export class MenuBar extends React.Component {
    render(){
        return (
                    <ul className="sidebar-nav">
                        <img src={logo} alt="" className="logo" />
                        <li className="sidebar-brand">
                            <Link to="/" className="sansserif">Client Accounts</Link>
                        </li>
                    </ul>
        )
    }
}
