import React from 'react';
import {withRouter} from 'react-router-dom'
import classes from './Burger.css';
import Burgeringredeint from './Burgeringredients/Burgaringredeint'
//import { object } from 'prop-types';
const Burger =(props)=> {
    //console.log(props)
    let transformingredeints= Object.keys(props.ingredeint).map(igKey=>{
         return [...Array(props.ingredeint[igKey])].map((_,i)=>{
            return <Burgeringredeint key={igKey+i} type={igKey} /> 
         });
    }).reduce((arr,ele)=>{
        return arr.concat(ele);
    },[]);
    //console.log(transformingredeints);
    if(transformingredeints.length===0)
    {
        transformingredeints=<p>Please add ingredeints</p>
    }
    return(
        <div className={classes.Burger}>
            <Burgeringredeint type="bread-top"/>
            {transformingredeints}
            <Burgeringredeint type="bread-bottom"/>
        </div>
    );
}

export default withRouter(Burger);