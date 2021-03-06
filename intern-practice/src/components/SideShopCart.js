import React, { Component } from 'react';
import '../styles/ShopCard.css';
import ShopCart from './ShopCart';

export default
class SideShopCart extends Component {
  constructor() {
    super();
    this.totalCost = 0;
    this.state = {
      isClosed: true,
    };
        // noinspection JSAnnotator
  }

  changeShopCardSize() {
    this.setState({
      isClosed: !this.state.isClosed,
    });
  }

  render() {
    const cardStyle = {
      position: 'fixed',
      right: 0,
      width: (this.state.isClosed) ? '0px' : '400px',
      height: '100%',
      backgroundColor: '#BEBEBE',
      transitionProperty: 'width',
      transitionDuration: '1s',
    };

    return (
      <div className="card hidden-xs" style={cardStyle}>

        <div className="button-pusher">
          <button className="shop-card-button" onClick={this.changeShopCardSize} >
            {this.props.itemsArray.length}
          </button>
        </div>

        <ShopCart
          onAddItem={this.props.onAddItem}
          itemsArray={this.props.itemsArray}
          onDeleteItem={this.props.onDeleteItem}
        />

      </div>

    );
  }
}
