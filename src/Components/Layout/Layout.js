import React,{Component} from 'react';
import Aux from '../../Hoc/Aux'
import classes from './Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'
//import { compilation } from 'webpack';
class Layout extends Component{
    state={
        showSideDrawer:false
    };
    sideDrawerClosedHandler=()=>
    {
        this.setState({showSideDrawer:false})
    }
    sideDrawerToggleHandler=()=>
    {
        this.setState((prevState)=>
        {
            return {showSideDrawer:!prevState.showSideDrawer}
        });
    }
    render()
    {
        return(
            <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>{this.props.children}</main>
        </Aux>
        );
    }
};

export default Layout;