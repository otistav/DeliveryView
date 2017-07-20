/**
 * Created by sam on 13.07.17.
 */
import React,{Component} from 'react'
import '../styles/Item.css'
export
class  Item extends Component{
    constructor(){
        super();
        this.state = {
            quantityOfMeal: 0,
            isOnCard: false,
            totalCost: 0
        };
        this.q=0;
    };
    // decQuantity = ()=>{
    //     if(this.state.quantityOfMeal>0)
    //         this.setState({
    //             quantityOfMeal: this.state.quantityOfMeal-1
    //     });
    //     if(this.props.quantity===0)
    //         this.setState({
    //             isOnCard:false
    //         });
    //     this.props.onDeleteItem(this.props.name)
    //
    // };

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
            this.setState({
                    quantityOfMeal: this.state.quantityOfMeal+1,
                    isOnCard: true,
                },
                    () => {
                    this.props.onAdd(this.props.name, this.props.cost, this.state.quantityOfMeal,this.state.isOnCard)
                        }
            );

    };


    render() {
      console.log('this is item props',this.props.itemState);
        this.q=this.setQValue(this.props.itemState);
        return (
            <div className='container'>
                {/*<div className="item-info" style={{color: 'antiquewhite'}}>*/}
                    {/*<div className="item-name">{this.props.name}</div>*/}

                    {/*<img src={this.props.img} style={{width:'50px',height:'175px'}}/>*/}
                {/*</div>*/}
                {/*<br/>*/}
                {/*<button className="submit-button" onClick={this.switchOrderStatus.bind(this)}>Buy it!</button>*/}
                {/*<div className="item-cost">Cost: {this.props.cost}</div>*/}
              <div className="col-xs-12  col-sm-4 col-md-3 col-lg-3 item">
                <div className="row item-image-block">
                  <img src={this.props.img} className="item-image"/>
                </div>
                <div className="row item-info">
                  <div className="col-lg-6">
                    <div className="item-name">
                      {this.props.name}<br/>
                    </div>
                    <div className="item-cost">
                     Cost: {this.props.cost}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <button className="submit-button" onClick={this.switchOrderStatus.bind(this)}>Buy it!</button>
                  </div>
                </div>
              </div>



            </div>
        )
    }
}
