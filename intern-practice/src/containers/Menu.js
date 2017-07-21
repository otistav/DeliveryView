/**
 * Created by sam on 13.07.17.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item } from '../components/Item';
import '../styles/Menu.css';

class Menu extends Component {
  constructor() {
    super();
    this.menu = [];
  }

  setMenu(obj) {
    for (const key in obj) {
      if (String(key) === this.props.type) {
        return obj[key];
      }
    }
    return this.props.foodState;
  }

  render() {
    this.menu = this.setMenu(this.props.menu);

    return (
      <div className="food-menu col-xs-8 col-sm-offset-2 col-xs-offset-2 col-md-offset-1">
        {this.menu.map(info => (<Item
          itemState={this.props.itemsInCard}
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
      itemsInCard: state.cardItemList,
      foodState: state.beer,
      menu: state.menu,
    }),
    dispatch => ({
      onAddItem: (name, cost, quantity, mystate, img) => {
        dispatch({ type: 'ADD_ITEM',
          item: { itemName: name,
            itemQuantity: quantity,
            itemCost: cost,
            itemState: mystate,
            itemImg: img },
        });
      },
      onDeleteItem: (name) => {
        dispatch({ type: 'DELETE_ITEM', itemName: name });
      },
    }),
)(Menu);
