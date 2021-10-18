import React from 'react';
import Burgerimage from '../../assets/Images/burger-logo.png';
import classes from './Logo.css';
const logo =(props)=>
(
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={Burgerimage} alt ='myBurger'/>
    </div>
);

export default logo;