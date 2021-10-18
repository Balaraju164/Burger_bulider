import React from 'react';
import classes from './Burgercontrols.css';
import Buildcontrol from './Buildcontrol/Buildcontrol'
const contols=[
    {label:'Salad',type:"salad"},
    {label:'Bacon',type:"bacon"},
    {label:'Cheese',type:"cheese"},
    {label:'Meat',type:"meat"}    
]
const Burgercontrols = (props)=>
(
   <div className={classes.control}>
       <p>Current Price:<strong>{props.price}</strong></p>
     {contols.map(cntrl=>(
         <Buildcontrol 
         key={cntrl.label} 
         label={cntrl.label} 
         added={()=>props.addingredeint(cntrl.type)}
         delete={()=>props.deleteingredeint(cntrl.type)}
         disable={props.diasabled[cntrl.type]}
         />
     ))}
     <button className={classes.OrderButton} disabled={!props.purchase} onClick={props.purchasee}>ORDER NOW</button>
   </div>
)

export default Burgercontrols;