/**
 * Created by sam on 13.07.17.
 */
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
}
    from 'react-router-dom';
import { Menus } from './Menus';

export
const Sidebar = (props) => {
  console.log(props);
  return (
    <Router>
      <div>
        <ul className="left-menu">
          {/* <Link className='active' to='/pizza'> Pizza<br/></Link>*/}
          {/* <Link className='active' to='/meat'> Meat<br/></Link>*/}
          {/* <Link className='active' to='/hotmeal'> HotMeal<br/></Link>*/}
          {/* <Link className='active' to='/salad'> Salads<br/></Link>*/}
          <Link className="active" to="/"> Home<br /></Link>
          <Link className="beer" to="/beer"> Beer<br /></Link>

        </ul>
        <Menus foodState={props.foodState} />


      </div>
    </Router>
  );
};
