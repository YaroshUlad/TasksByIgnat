import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={'headerWrapper'}>
            <div className={'hiddenLinks'}>
                <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </div>

        </div>
    )
}

export default Header
