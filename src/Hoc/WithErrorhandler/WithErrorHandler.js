import React, { Component } from 'react';
import Modal from'../../Components/UI/Modal/Modal';
import Aux from '../Aux';
const WithErrorHanler =(WrappedComponent,axios)=>
{
    return class extends Component{
        constructor(props)
        {
            super(props)
            this.state={
                error:null
            }
            axios.interceptors.request.use(req=>req,error=>{
                this.setState({error:error})
                //return req;
            })
            axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error})
            })

        }
        ErrorclosedHandler=()=>
        {
            this.setState({error:null})
        }
        render()
        {
        return( 
            <Aux>
            <Modal 
            show={this.state.error}
            modalclosed={this.ErrorclosedHandler}
            >
                {this.state.error ? this.state.error.message:null}
            </Modal>
            <WrappedComponent {...this.props} />
            </Aux>
        )
    }
}
}

export default WithErrorHanler;
