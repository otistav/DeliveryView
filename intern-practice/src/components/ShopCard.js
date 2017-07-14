/**
 * Created by sam on 13.07.17.
 */
import React,{Component} from 'react'

export
class ShopCard extends Component{


    render(){
        return(
            <div className="shopCard">
                <div>{this.props.ItemsArray.map((item)=>
                    <div className="cardItems">
                        <ul className="cardName">{item.itemName.name}</ul>
                        <ul className="cardCost">{item.itemCost.cost}</ul>
                        <ul className="cardQ">{item.itemQuantity.quantity}</ul>
                    </div>)}
                </div>

            </div>
        )

    }
}