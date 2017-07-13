/**
 * Created by sam on 13.07.17.
 */
import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import Menu from '../containers/Menu'
import {MainMenu} from './MainMenu'
export
class Menus extends Component{
    menu={
        pizza:
            [{cost:55,name:'cheesy'}],

        meat:
            [{cost:20,name:'goose'},{cost:24,name:'dog'}],

        salad:
            [{cost:546,name:'cesar'},{cost:410,name:'sea salad'},{cost:410,name:'qqq'}],

        hotMeal:
            [{cost:525,name:'soup'},{cost:430,name:'noodles'}],




    };

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