import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Checkoutsummary from '../../Components/Order/CheckoutSummary/Checkoutsummary'
import Contentdata from './Contentdata/Contentdata';
class Checkout extends Component {
    state={
        ingredeints:null,
        price:0
    }
    componentWillMount()
    {
        //console.log(this.props)
        const search1 = this.props.location.search;
        const query = new URLSearchParams(search1);
        let data ={};
        let pricee=0;
        for( let params of query.entries())
        {
            if(params[0]==="price")
            {
                pricee= +params[1]
            }else{
            data[params[0]]= +params[1]
            }
        }
        this.setState({ingredeints:data,price:pricee})
    }
    checkoutcancelsummary=()=>
    {
        this.props.history.goBack();
    }
    checkoutcontinuesummary = ()=>
    {
        this.props.history.replace('/Checkout/content-data')
    }
    render()
    {
        //console.log(this.props)
     return(
         <div>
         <Checkoutsummary ingredeints ={this.state.ingredeints} 
         checkoutcancel={this.checkoutcancelsummary}
         checkoutcontinue={this.checkoutcontinuesummary}/>
         <Route path={this.props.match.path + '/content-data'} render={(props)=><Contentdata ingredeints={this.state.ingredeints} price={this.state.price} {...props}/>}/>
         </div>
     );
    }

}

export default Checkout;