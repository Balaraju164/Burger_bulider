import React, { Component } from 'react';
import Aux from '../../Hoc/Aux';
import Button from '../UI/Button/Button'
class Ordersummary extends Component{
    componentDidUpdate()
    {
        console.log("[order summary] did update");
    }
    render()
    {
        const ingredientsummary = Object.keys(this.props.ingredientt).map(igKey=>{
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredientt[igKey]}</li>
            });
        return(
            <Aux>
        <h3>Your Order Details:</h3>
        <p>A delicious burger with following ingredients</p>
        <ul>
            {ingredientsummary}
        </ul>
        <p><strong>Your yummy order costs:{this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchasecancel}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.purchasecontinue}>Continue</Button>
    </Aux>
        );
    }
}

export default Ordersummary;