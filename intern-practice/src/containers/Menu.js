/**
 * Created by sam on 13.07.17.
 */


import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Item} from '../components/Item'
import axios from 'axios'

class Menu extends Component{
    render(){
        // const q = this.props.ItemState.map(item =>{return item.itemQuantity.quantity});
        console.log("this is state",this.props.ItemState);
        // console.log('this is q', q);
        return(
            <div className="menu">
                <button onClick={this.props.onGetItems}>j</button>
                {this.props.info.map((info)=><Item ItemState={this.props.ItemState} onDeleteItem={this.props.onDeleteItem}
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
                    dispatch({type: 'FETCH_FOOD_START'});
                    axios.get("https://api.punkapi.com/v2/beers")
                        .then((response)=>{
                            dispatch({type: "RECEIVE_FOOD", payload: response})
                        })

                //     setTimeout(() => {
                //         console.log('I got items');
                //         dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: [] });
                //     }, 2000)

                 }
            };
            dispatch(asyncGetItems());
        },


    //http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
    }),


)(Menu)