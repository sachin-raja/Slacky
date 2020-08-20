import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from '@material-ui/icons/Help'
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }] = useStateValue();
    return (
        <div className = "header" >
            <div className = 'header_left'>
                {/* image for the logged in user */}
                {/* <Avatar className = "header_avatar" alt = {user?.displayName} src={user?.photoURL} /> */}
                < Avatar className = "header_avatar" alt = {user?.displayName} src={user?.photoURL} />
                {/* time icon */}
                <AccessTimeIcon />
            </div>
            <div className = "header_search">
                {/* search icon */}
                <SearchIcon />
                {/* input */}
                <input placeholder = "Search Please" />
            </div>
            <div className = "header_right">
                {/* help icon */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
