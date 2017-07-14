/**
 * Created by sam on 13.07.17.
 */
import React,{Component} from 'react'
export
class  Item extends Component{
    state = {
        quantityOfMeal: 0,
        isOnCard: false,
        totalCost: 0
    };
    quantityOfMeal=0;

    q=0;
    button = '';
    setDeleteButton = ()=>{
        if(this.state.quantityOfMeal>0)
            this.button = <button onClick={this.decQuantity}>-</button>;
        else
            this.button = ''
    };
    decQuantity = ()=>{
        if(this.state.quantityOfMeal>0)
            this.setState({
                quantityOfMeal: this.state.quantityOfMeal-1
        });
        if(this.props.quantity===0)
            this.setState({
                isOnCard:false
            });
        this.props.onDeleteItem(this.props.name)

    };


    setQValue = (array)=>{
        if(array.length>0) {
            for (let i = array.length - 1; i >= 0; i--) {
                if (array[i].itemName === this.props.name)
                    return array[i].itemQuantity;
            }
            return 0;
        }
        else
            return 0;
      };
    switchOrderStatus = ()=>{
        if(this.quantityOfMeal>0) {
            this.setState({
                    quantityOfMeal: this.quantityOfMeal+this.state.quantityOfMeal,
                    isOnCard: true,
                },
                    () => {
                    this.props.onAdd(this.props.name, this.props.cost, this.state.quantityOfMeal,this.state.isOnCard)
                        }
            );
        }
    };

    setQuantityOfMeal= (e)=>{
        if(e.target.value > 0)
            this.quantityOfMeal = +(e.target.value);
        else {
            this.quantityOfMeal = 0;
        }


    };

    render() {
        console.log('this is quantity of meal',this.state.quantityOfMeal)
        this.setDeleteButton();
        this.q=this.setQValue(this.props.ItemState);
        // console.log(this.q);

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
                {this.q}{this.button}
            </div>
        )
    }
}
