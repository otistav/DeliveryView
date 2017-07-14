
import React, {Component} from 'react'
import '../index.css'
import {connect} from 'react-redux'
import {ShopCard} from '../components/ShopCard'
import {TopBar} from '../components/TopBar'
import {LeftBar} from '../components/LeftBar'

class App extends Component{
    render(){
        return(
            <div>
                {/*<h1>{this.props.ItemState.length}</h1>*/}
                <LeftBar/>
                {/*<TopBar/>*/}
                <ShopCard ItemsArray={this.props.ItemState}/>
                <div className="MyDiv">
                    {/*<input type="text" onChange={(e)=> this.item = e.target.value}/>*/}
                    {/*<button onClick={()=>this.props.onAddItem(this.item)}>push</button>*/}
                    {/*{this.props.testStore.map(item =><div>{item}</div>)}*/}
                </div>
            </div>
        )
    }
}

export default connect(
    state=> ({
        ItemState: state
    }),
    dispatch =>({}),


)(App)