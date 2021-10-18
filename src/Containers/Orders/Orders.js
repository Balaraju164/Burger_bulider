import React,{Component} from 'react';
import Order from '../../Components/Order/Order';
import axios from '../../axios-orders';
import Errorhandler from '../../Hoc/WithErrorhandler/WithErrorHandler'
import Spinner from '../../Components/UI/Spinner/Spinner'
class Orders extends Component{
    state={
        orders:[],
        loading:false
    }
    componentDidMount()
    {
        this.setState({loading:true})
        axios.get('/Orders.json').then(res=>
            {
                //console.log(res.data)
                const fetchorders=[]
                for(let key in res.data)
                {
                    fetchorders.push({
                        ...res.data[key],
                        id:key
                    })
                }
                this.setState({loading:false,orders:fetchorders})
            }).catch(err=>{
                this.setState({loading:false})
            })
    }
    render()
    {
        let orderss=(
            this.state.orders.map(ord=>(
                <Order
                key={ord.id}
                ingredients={ord.ingredeints}
                price={ord.price} />

            ))
        )
        if(this.state.loading)
        {
            orderss=<Spinner />
        }
        return(
            <div>
                {orderss}
            </div>
        );
    }
}

export default Errorhandler(Orders,axios);