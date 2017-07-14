/**
 * Created by sam on 13.07.17.
 */
import React,{Component} from 'react'

export
class ShopCard extends Component{
totalCost = 0;



    render(){
        let myArray=this.props.ItemsArray.map(item=> {return item.itemQuantity*item.itemCost;});
        this.totalCost = myArray.reduce((sum,current)=> {return sum+current},0);
        return(
            <div className="shopCard">
                <div className="shopCardHead">Shop Card</div>
                <div>{this.props.ItemsArray.map((item)=>
                    <div>
                        <div className="cardItems">
                            <li className="cardName">{item.itemName}:</li>
                            <li className="cardCost">{item.itemCost}:</li>
                            <li className="cardQ">{item.itemQuantity}</li>
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