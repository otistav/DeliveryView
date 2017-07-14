/**
 * Created by sam on 13.07.17.
 */
import React,{Component} from 'react'
export
class  Item extends Component{
    state = {
        quantityOfMeal: 0,
    };
    quantityOfMeal=0;

    q=0;

    setQValue = (array)=>{
        if(array.length>0) {
            for (let i = array.length - 1; i >= 0; i--) {
                if (array[i].itemName.name === this.props.name)
                    return array[i].itemQuantity.quantity;
            }
            return 0;
        }
        else
            return 0;
      };
    switchOrderStatus = ()=>{

        this.setState({
                quantityOfMeal: this.quantityOfMeal,
            },()=>{this.props.onAdd({name:this.props.name},{cost:this.props.cost},{quantity:this.state.quantityOfMeal})}
        );
        // this.state.quantity = this.props.qArray[this.props.qArray.length-1];
        // this.p = this.props.qArray[this.props.qArray.length-1];

    };

    setQuantityOfMeal= (e)=>{
        if(e.target.value > 0)
            this.quantityOfMeal = +(e.target.value);
        else {
            this.quantityOfMeal = 0;
        }


    };
    render() {
        this.q=this.setQValue(this.props.ItemState);
        console.log(this.q);

        // console.log("this is itemState",this.props.ItemState);
        // console.log(this.props.ItemState[0]);
        return (
            <div>
                <div style={{color: 'antiquewhite'}}>
                    {this.props.name}
                    {this.props.cost}
                </div>
                <br/>
                <button className="submitButton" onClick={this.switchOrderStatus.bind(this)}>✓</button>
                <input onChange={this.setQuantityOfMeal} className="input" type="text"/>
                {this.q}
            </div>
        )
    }
}
