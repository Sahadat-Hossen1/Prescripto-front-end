import React from 'react';
import { NavLink } from 'react-router-dom';
import reactsvg from './../../assets/react.svg'
const NavBar = () => {
    return (
        <div>
            {/* for prescripto icon showing */}
            <div>
                <img src={reactsvg} alt="Prescripto" />
            </div>
            <div>
                <ul>
                    <li><NavLink to="./">Home </NavLink> </li>
                    <li><NavLink to="./"> </NavLink> </li>
                    <li><NavLink to="./"> </NavLink> </li>
                    <li><NavLink to="./"> </NavLink> </li>
                    <li><NavLink to="./"> </NavLink> </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;