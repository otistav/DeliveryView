/**
 * Created by sam on 13.07.17.
 */
import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Link,
}
    from 'react-router-dom'
import {Menus} from './Menus'
export
class LeftBar extends Component{
    render(){
        return(
            <Router>
                <div>
                    <ul className='LeftMenu'>
                        <Link className='active' to='/pizza'> Pizza<br/></Link>
                        <Link className='active' to='/meat'> Meat<br/></Link>
                        <Link className='active' to='/hotmeal'> HotMeal<br/></Link>
                        <Link className='active' to='/salad'> Salads<br/></Link>
                        <Link className='active' to='/'> Home<br/></Link>
                    </ul>
                    <Menus/>


                </div>
            </Router>
        )
    }
}