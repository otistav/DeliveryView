import React, { Component } from 'react';
import '../styles/ShopCard.css';

export
class ShopCardItems extends Component {
  constructor() {
    super();
    this.totalCost = 0;
    this.state = {
      isClosed: true,
    };
  }

  setQuantityOfMeal(name, value) {
    for (let i = this.props.itemsArray.length - 1; i >= 0; i--) {
      if (this.props.itemsArray[i].itemName === name) {
        this.props.onAddItem(this.props.itemsArray[i].itemName, this.props.itemsArray[i].itemCost,
            Number(value), this.props.itemsArray[i].itemState, this.props.itemsArray[i].itemImg);
      }
    }
  }

  setCardHeader() {
    if (this.props.itemsArray.length > 0) { return (<h3 style={{ borderBottom: '2px solid white' }}>Your Shop Card</h3>); }
    return (<h3 style={{ borderBottom: '2px solid white' }}>Card is empty</h3>);
  }

  render() {
    const myArray = this.props.itemsArray.map(item => item.itemQuantity * item.itemCost);

    this.totalCost = myArray.reduce((sum, current) => sum + current, 0);

    if (this.props.itemsArray.length > 0) {
      this.props.itemsArray.sort((a, b) => {
        if (a.itemName > b.itemName) { return 1; }
        return -1;
      });
    }


    const Header = this.setCardHeader();
    return (
      <div>
        {Header}
        <div className="card-items">
          {this.props.itemsArray.map(item => (
            <div>
              <div className="card-item">
                <div className="card-item-image">
                  <img alt="item" src={item.itemImg} style={{ width: '29px', height: '23.13px' }} />
                </div>
                <div className="card-name">
                  <a className="card-link">
                    {item.itemName}
                  </a>
                </div>
                {/* <li className="card-quantity">Q:{item.itemQuantity}, </li>*/}
                <input
                  type="text"

                  onChange={e => this.setQuantityOfMeal(item.itemName, e.target.value)}
                  style={{ marginRight: '20px',
                    position: 'absolute',
                    left: '180px',
                    borderRadius: '20%',
                    marginTop: '2px' }}
                  value={item.itemQuantity}
                />
                <div className="card-cost">
                  {item.itemCost} USD
                                    </div>
                <button style={{ position: 'absolute', left: '300px' }} onClick={() => { this.props.onDeleteItem(item.itemName); }}>x</button>
              </div>
            </div>))}
        </div>
        <div style={{ fontSize: '130%', color: '#ED7B54', borderTop: '2px solid white' }}>
                    total Cost: {this.totalCost}
        </div>
      </div>
    );
  }
}
