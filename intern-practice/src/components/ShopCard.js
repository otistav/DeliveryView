/**
 * Created by sam on 13.07.17.
 */
import React,{Component} from 'react'

export
class ShopCard extends Component{
    constructor(){
        super();
        this.totalCost = 0;
    }



    render(){
        let myArray=this.props.ItemsArray.map(item=> {return item.itemQuantity*item.itemCost;});
        this.totalCost = myArray.reduce((sum,current)=> {return sum+current},0);
        return(
            <div className="shop-card">
                <div className="shop-card-header">Shop Card</div>
                <div>{this.props.ItemsArray.map((item)=>
                    <div>
                        <div className="card-items">
                            <li className="card-name">{item.itemName}:</li>
                            <li className="card-cost">{item.itemCost}:</li>
                            <li className="card-quantity">{item.itemQuantity}</li>
                        </div>
                    </div>)}
                </div>
                <div>
                   total Cost: {this.totalCost}
                </div>

            </div>
        )

    }
}