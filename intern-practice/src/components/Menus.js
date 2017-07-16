/**
 * Created by sam on 13.07.17.
 */
import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import Menu from '../containers/Menu'
import {MainMenu} from './MainMenu'
export
class Menus extends Component{
    constructor(){
        super();
        this.menu={
            pizza:
                [{cost:5,name:'cheesy',quantity:0}],

            meat:
                [{cost:20,name:'goose',quantity:0},{cost:24,name:'dog',quantity:0}],

            salad:
                [{cost:2,name:'cesar',quantity:0},{cost:4,name:'sea salad',quantity:0},{cost:10,name:'qqq',quantity:0}],

            hotMeal:
                [{cost:525,name:'soup',quantity:0},{cost:430,name:'noodles',quantity:0}],




        };

    }

    render(){
        return(
            <div>

                <Route exact path="/pizza" render={()=><Menu info={this.menu.pizza}/>}/>
                <Route path="/meat" render={()=><Menu info={this.menu.meat}/>}/>
                <Route path="/hotmeal" render={()=><Menu info={this.menu.hotMeal}/>}/>
                <Route path="/salad" render={()=><Menu info={this.menu.salad}/>}/>
                <Route exact path="/" component={MainMenu}/>

            </div>

        )
    }
}