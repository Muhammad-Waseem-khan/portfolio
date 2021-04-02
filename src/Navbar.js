import React from 'react';
import "./index.css";
import { NavLink} from 'react-router-dom';
// import Links from './Links';

const Navbar=()=>{
    return(
        <>
        {/* <Links /> */}
        <div className='navbar'>
        <div className='logo'><h3>MWK</h3></div>
        <div className="navbar-items">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/Services">Services</NavLink></li>
                <li><NavLink exact to="/Contact">Contact</NavLink></li>
                <li><NavLink exact to='/About'>About</NavLink></li>
            </ul>
        </div>
        </div>
        
        </>
    );
}

export default Navbar;