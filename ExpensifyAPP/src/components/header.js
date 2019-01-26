import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => 
    <div>
        <header>
            <h1>Expensify APP </h1>
        </header>
        <ul>
            <li><NavLink to='/' exact={true} activeClassName='is-active'>Dashboard</NavLink></li>
            <li><NavLink to='/create' activeClassName='is-active'>Create</NavLink></li>
            <li><NavLink to='/help' activeClassName='is-active'>Help</NavLink></li>
        </ul>
    </div>

export default Header
