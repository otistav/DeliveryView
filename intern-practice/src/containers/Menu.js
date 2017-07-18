/**
 * Created by sam on 13.07.17.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item } from '../components/Item';
import '../styles/Menu.css'

class Menu extends Component {
  render() {
        // const q = this.props.ItemState.map(item =>{return item.itemQuantity.quantity});
        // console.log('this is q', q);
    return (
        <div className="items">
          {this.props.info.map(info => (<Item
            ItemState={this.props.ItemState}
            onDeleteItem={this.props.onDeleteItem}
            onAdd={this.props.onAddItem}
            {...info}
          />))}
        </div>
    );
  }
}

export default connect(
    state => ({
      ItemState: state.itemList,
      foodState: state.beer,
    }),
    dispatch => ({
      onAddItem: (name, cost, quantity, mystate) => {
        dispatch({ type: 'ADD_ITEM',
          item: { itemName: name,
            itemQuantity: quantity,
            itemCost: cost,
            itemState: mystate } });
      },
      onDeleteItem: (name) => {
        dispatch({ type: 'DELETE_ITEM', itemName: name });
      },
    // http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
    }),


)(Menu);
