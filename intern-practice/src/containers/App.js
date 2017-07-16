
import React, {Component} from 'react'
import '../index.css'
import {connect} from 'react-redux'
import {ShopCard} from '../components/ShopCard'
import {Header} from '../components/Header'
import {Sidebar} from '../components/Sidebar'

class App extends Component{
    render(){
        return(
            <div>
                {/*<h1>{this.props.ItemState.length}</h1>*/}
                <Sidebar/>
                <Header/>
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