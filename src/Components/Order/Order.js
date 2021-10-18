import React from 'react';
import classes from './Order.css'
const Order =(props)=>
{
    const ingre=[];
    for(let ingredientname in props.ingredients)
    {
        ingre.push({
            name:ingredientname,
            amount:props.ingredients[ingredientname]
        })
    }
    const ingredientoutput=ingre.map(ig=>
        {
        return <span key={ig.name}
        style={{textTransform:'capitalize',display:'inline-block',margin:'0 4px',border:'1px solid #ccc',padding:'5px'}}>{ig.name} ({ig.amount})</span>
        })
    return(
        <div className={classes.Order}>
        <p>Ingredients : {ingredientoutput}</p>
<        p>Price:<strong>INR:{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
    )
}

export default Order;