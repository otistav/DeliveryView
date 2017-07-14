/**
 * Created by sam on 13.07.17.
 */


import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Item} from '../components/Item'

class Menu extends Component{
    render(){
        // const q = this.props.ItemState.map(item =>{return item.itemQuantity.quantity});
        const menuList=this.props.info;
        console.log("this is state",this.props.ItemState);
        // console.log('this is q', q);
        return(
            <div className="menu">
                {menuList.map((info)=><Item ItemState={this.props.ItemState} onDeleteItem={this.props.onDeleteItem}
                                            onAdd={this.props.onAddItem} {...info}/>)}
            </div>
        )
    }
}

export default connect(
    state=> ({
        ItemState: state
    }),
    dispatch =>({
        onAddItem: (name,cost,quantity,mystate)=>{
            // console.log('this is working');
            dispatch({type: 'ADD_ITEM', item:{itemName:name,itemQuantity:quantity,
                                                itemCost:cost,itemState:mystate}});
        },
        onDeleteItem: (name)=>{
            dispatch({type: 'DELETE_ITEM',itemName:name})
        },
        onGetItems: () => {
            const asyncGetItems = () => {
                return dispatch => {
                    setTimeout(() => {
                        console.log('I got items');
                        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: [] });
                    }, 2000)
                }
            };
            dispatch(asyncGetItems());
        },



    }),


)(Menu)