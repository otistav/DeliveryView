/**
 * Created by sam on 13.07.17.
 */


import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Item} from '../components/Item'

class Menu extends Component{
    render(){
        this.q = this.props.ItemState.item;
        const menuList=this.props.info;
        console.log('this is q', this.props.itemQuantity);
        console.log('this is props',this.props);
        return(
            <div className="menu">
                {menuList.map((info)=><Item  onAdd={this.props.onAddItem} {...info}/>)}
            </div>
        )
    }
}

export default connect(
    state=> ({
        ItemState: state
    }),
    dispatch =>({
        onAddItem: (name,cost,quantity)=>{
            dispatch({type: 'ADD_ITEM', item:{itemName:name,itemQuantity:quantity,itemCost:cost}});
        }
    }),


)(Menu)