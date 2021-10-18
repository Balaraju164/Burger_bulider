import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import Aux from '../../../Hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop'
const sidedrawer =(props)=>{
    let attachedclasses =[classes.Sidedrawer,classes.Close];
    if(props.open)
    {
        attachedclasses=[classes.Sidedrawer, classes.Open];
    }
    return(
        <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedclasses.join('  ')}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
}

export default sidedrawer;