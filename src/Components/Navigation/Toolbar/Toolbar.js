import React from 'react';
import calsses from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Drawertoggle from '../Sidedrawer/Drawertoggle/drawertoggle'
const toolbar =(props)=>
(
    <header className={calsses.Toolbar}>
        <Drawertoggle clicked={props.drawerToggleClicked} />
        <div className={calsses.Logo}>
           <Logo />
        </div>
        <nav className={calsses.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;