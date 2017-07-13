/**
 * Created by sam on 13.07.17.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
export
class  Item extends Component{
    state = {
        quantityOfMeal: 0,
    };
    quantityOfMeal=0;
    switchOrderStatus = ()=>{

        this.setState({
                quantityOfMeal: this.quantityOfMeal,
            },()=>{this.props.onAdd({name:this.props.name},{cost:this.props.cost},{quantity:this.state.quantityOfMeal})}
        );
    };

    setQuantityOfMeal= (e)=>{
        if(e.target.value > 0)
            this.quantityOfMeal = +(e.target.value);
        else {
            this.quantityOfMeal = 0;
        }


    };
    render() {
        console.log('this is item props',this.props);
        return (
            <div>
                <div style={{color: 'antiquewhite'}}>
                    {this.props.name}
                    {this.props.cost}
                </div>
                <br/>
                <button className="submitButton" onClick={this.switchOrderStatus.bind(this)}>✓</button>
                <input onChange={this.setQuantityOfMeal} className="input" type="text"/>
                {this.props.quantity}
            </div>
        )
    }
}
