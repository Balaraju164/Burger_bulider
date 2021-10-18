import React from 'react';
import Burger from '../../Burger/Burger';
import classes from './Checkoutsummary.css';
import Button from '../../UI/Button/Button'
const Checkoutsummary =(props) =>
{
    return(
        <div className={classes.Checkoutsummary}>
            <h2>we hope it tastes well..!!!</h2>
            <div style={{width:'100%',margin:'25px auto'}}>
                <Burger ingredeint ={props.ingredeints} />
            </div>
            <Button btnType="Danger" clicked={props.checkoutcancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutcontinue}>Continue</Button>
        </div>
    )
}

export default Checkoutsummary;