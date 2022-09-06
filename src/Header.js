import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className="header_icon"
                    src={require('./img/airbnb_logo.png')} alt="" />

            </Link>

            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />

            </div>

        </div>
    )

}

export default Header