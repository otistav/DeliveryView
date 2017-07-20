import React, { Component } from 'react';
import '../styles/ShopCard.css';

export
class ShopCard extends Component {
  constructor() {
    super();
    this.totalCost = 0;
    // this.setQuantityOfMeal = this.setQuantityOfMeal.bind(this);
  }

  setQuantityOfMeal = (name,value)=>{
    console.log("value",value);
      for (let i = this.props.itemsArray.length - 1; i >= 0; i--) {
        console.log("this is itemsarray", this.props.itemsArray);

        if (this.props.itemsArray[i].itemName === name) {
          this.props.onAddItem(this.props.itemsArray[i].itemName, this.props.itemsArray[i].itemCost,
            value, this.props.itemsArray[i].itemState)
        }
      }
  };

  render() {
    console.log('this is props of shop card', this.props.itemsArray);
    const myArray = this.props.itemsArray.map(item => item.itemQuantity * item.itemCost);
    this.totalCost = myArray.reduce((sum, current) => sum + current, 0);
    return (
      <div className="shop-card">
        <div className="shop-card-header">Shop Card</div>
        <div>{this.props.itemsArray.map(item =>
          (<div>
            <div className="card-items">
              <li className="card-name">Name:{item.itemName},</li>
              {/* <li className="card-quantity">Q:{item.itemQuantity}, </li>*/}
              Q:<input type="text"
                       onChange={(e)=>this.setQuantityOfMeal(item.itemName,e.target.value)}
                       style={{ width: '10%' }}
                       value={item.itemQuantity}
              />
              <li className="card-cost">Cost:{item.itemCost}</li>
            </div>
          </div>))}
        </div>
        <div>
                    total Cost: {this.totalCost}
        </div>

      </div>
    );
  }
}
