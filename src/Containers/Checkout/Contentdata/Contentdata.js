import React,{Component} from 'react'
import Button from '../../../Components/UI/Button/Button'
import classes from './contentdata.css';
import axios from '../../../axios-orders'
import Spinner from '../../../Components/UI/Spinner/Spinner'
import Input from '../../../Components/UI/Input/Input'
class Contentdata extends Component
{
    state={
        orderForm: {
                name:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Your Name'
                    },
                    value:'',
                    validation:
                    {
                        required:true
                    },
                    valid:false
                },
                street:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Your Street'
                    },
                    value:'',
                    validation:
                    {
                        required:true
                    },
                    valid:false
                },
                Zipcode:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Zip-code'
                    },
                    value:'',
                    validation:
                    {
                        required:true,
                        minlength:6
                    },
                    valid:false
                },
                country:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Your Country'
                    },
                    value:'',
                    validation:
                    {
                        required:true
                    },
                    valid:false
                },
                email:{
                    elementType:'input',
                    elementConfig:{
                        type:'email',
                        placeholder:'Your email'
                    },
                    value:'',
                    validation:
                    {
                        required:true
                    },
                    valid:false
                },
                deliverymethod:{
                    elementType:'select',
                    elementConfig:{
                        options:[
                            {value:'fastest', displayValue:'Fastest'},
                            {value:'cheapest', displayValue:'Cheapest'}
                        ]
                    },
                    value:''
                }
        },
        loading:false
    }
    orderHandler=(event)=>
    {
        event.preventDefault();
        this.setState({loading:true})
        const formdata={}
        for(let formelementIdentifier in this.state.orderForm)
        {
            formdata[formelementIdentifier]=this.state.orderForm[formelementIdentifier].value;
        }
        const orders={
            orderdata:formdata,
            ingredeints:this.props.ingredeints,
            price: this.props.price
        }
        axios.post('/Orders.json',orders).then(response=>{this.setState({loading:false});this.props.history.push('/')}).catch(error=>this.setState({loading:false}));
    }

    checkvalidation=(value,rules)=>
    {
        let isValid=true
        if(rules.required)
        {
            isValid=value.trim() !== '' && isValid;
        }
        if(rules.minlength)
        {
            isValid=value.length>=rules.minlength && isValid;
        }
        return isValid;
    }

    inputchangeHandler=(event,inputIdentifier)=>
    {
        //console.log(event.target.value)
        const updatedOrderForm={
            ...this.state.orderForm
        }
        const updatedFormElement={
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value=event.target.value;
        updatedFormElement.valid=this.checkvalidation(updatedFormElement.value,updatedFormElement.validation)
        updatedOrderForm[inputIdentifier]=updatedFormElement;
        console.log(updatedOrderForm)
        this.setState({orderForm:updatedOrderForm})
    }
    render()
    {
        const formElementsArray=[];
        for(let key in this.state.orderForm)
        {
            formElementsArray.push({
                    id:key,
                    config:this.state.orderForm[key]
            })
        }
        let form=(
             <form onSubmit={this.orderHandler}>
                    {formElementsArray.map(formElement=>(
                        <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event)=>this.inputchangeHandler(event,formElement.id)}/>
                    ))}
                    <Button btnType="Success">Order</Button>
                </form>
        )
        if(this.state.loading)
        {
            form=<Spinner />
        }
        return(
            <div className={classes.contentdata}>
                <h4>Please enter your details..</h4>
                {form}
            </div>
        ); 
    }
}

export default Contentdata;