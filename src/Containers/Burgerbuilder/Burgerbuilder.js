import React, {Component} from 'react';
import classes from './Burgerbuilder.css';
import Aux from '../../Hoc/Aux';
import Burgerr from '../../Components/Burger/Burger';
import Burgercontrols from '../../Components/Burger/Burgercontols/Burgercontrols'
import OrderSummary from '../../Components/Ordersummary/ordersummary'
import Modal from '../../Components/UI/Modal/Modal'
import Spinner from '../../Components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import WithErrorHandler from '../../Hoc/WithErrorhandler/WithErrorHandler';
const Ingredient_prices ={
    salad:5,
    bacon:5,
    cheese:10,
    meat:20
}
class Burgerbuilder extends Component {
    // constructor(props)
    // {
    //     super(props);
    //     this.state={};
    // }
    
    state={
        error:false,
        loading:false,
        purchasing:false,
        purchasable:false,
        totalprice:4,
        ingredeints:null
    }
   //state={}
    componentDidMount()
    {
        axios.get('https://my-burger-84ff4.firebaseio.com/ingredeints.json').then(response=>{
            this.setState({ingredeints:response.data})
        }).catch(error=>{this.setState({error:true})})
    }

   updatePurchasablestate=(ingredeint)=>
   {
       const sum =Object.keys(ingredeint).map(igKey=>{
           return ingredeint[igKey]
       }).reduce((sum,ele)=>{return sum+ele},0)
       //console.log(sum)
       this.setState({purchasable:sum>0})
   }
    addIngredeintHandler =(type)=>{
        const oldcount = this.state.ingredeints[type];
        //console.log(oldcount)
        const updatecount= oldcount+1;
        //console.log(updatecount)
        const updatedingredeints={...this.state.ingredeints};
        updatedingredeints[type]=updatecount;
        //console.log(updatedingredeints);
        const priceaddition=Ingredient_prices[type];
        const oldprice=this.state.totalprice;
        const newprice=priceaddition+oldprice;
        this.setState({totalprice:newprice,ingredeints:updatedingredeints})
        this.updatePurchasablestate(updatedingredeints);
    }
    deleteIngredeintHandler = (type)=>
    {
        const oldcount = this.state.ingredeints[type];
        const updatecount= oldcount-1;
        const updatedingredeints={...this.state.ingredeints};
        updatedingredeints[type]=updatecount;
        const pricedeletion=Ingredient_prices[type];
        const oldprice=this.state.totalprice;
        const newprice=oldprice-pricedeletion;
        this.setState({totalprice:newprice,ingredeints:updatedingredeints})
        this.updatePurchasablestate(updatedingredeints);
    }
    purchaseHandler=()=>
    {
        this.setState({purchasing:true})
        //console.log(purchasing)
    }
    purchasecancelhandler=()=>
    {
        this.setState({purchasing:false})
    }
    purchasecontinueHandler=()=>
    {
        //alert("Please procced!!!...");
        // 
        // this.setState({purchasing:false});
        const queryparams =[]
        for(let i in this.state.ingredeints)
        {
            queryparams.push(encodeURIComponent(i)+'='+ encodeURIComponent(this.state.ingredeints[i]))
        }
        queryparams.push("price="+ this.state.totalprice)
        const querystring = queryparams.join('&');
        this.props.history.push({
            pathname: '/Checkout',
            search: '?'+querystring
        })
    }
    render()
    {
        const disableInfo={
            ...this.state.ingredeints
        }
        for(let key in disableInfo){
            disableInfo[key]=disableInfo[key]<=0
            //console.log(disableInfo[key]);
        }
        let ordersummary=null;
        let burger=this.state.error? <strong className={classes.error}>Something went wrong!!!</strong>:<Spinner />;
        if(this.state.ingredeints)
        {
            burger=(
                <Aux>
                    <Burgerr ingredeint={this.state.ingredeints}/>
                <Burgercontrols 
                 addingredeint={this.addIngredeintHandler}
                 deleteingredeint={this.deleteIngredeintHandler}
                 diasabled={disableInfo}
                 purchase={this.state.purchasable}
                 price={this.state.totalprice}
                 purchasee={this.purchaseHandler}
                />
                </Aux>
            );
            ordersummary=<OrderSummary 
        ingredientt={this.state.ingredeints}
        purchasecancel={this.purchasecancelhandler}
        purchasecontinue={this.purchasecontinueHandler}
        price={this.state.totalprice}
         />
        }
        if(this.state.loading)
        {
         ordersummary= <Spinner />
        }
        return (
            <Aux>
            <Modal show={this.state.purchasing} modalclosed={this.purchasecancelhandler}>
            {ordersummary}
            </Modal>
            {burger}
            </Aux>
        )
    }
}

export default WithErrorHandler(Burgerbuilder,axios);