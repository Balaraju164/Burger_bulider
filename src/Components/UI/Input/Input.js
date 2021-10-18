import React from 'react';
import classes from './Input.css'
const Input =(props)=>{
    let inputElements=null;
    switch(props.elementType)
    {
        case "input":
            inputElements=<input className={classes.InputElements} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case "textarea":
            inputElements=<textarea className={classes.InputElements}  {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case "select":
            inputElements=
            (<select className={classes.InputElements}  
                 value={props.value}
                 onChange={props.changed}>
                   {props.elementConfig.options.map(option=>(
                       <option key={option.value} value={option.value}>{option.displayValue}</option>
                   ))} 
                </select>)
            break;
        default:
            inputElements=<input className={classes.InputElements}  {...props.elementConfig} value={props.value} onChange={props.changed}/>
    }
    return(
        <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElements}
    </div>
    )
}
export default Input;