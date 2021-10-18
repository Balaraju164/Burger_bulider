import React from 'react';
import classes from './Buildcontrol.css';
const Buildcontrol = (props)=>
(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.delete} disabled={props.disable}>less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
)

export default Buildcontrol;