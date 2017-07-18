
import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
}
  from 'react-router-dom';
import { Menus } from './Menus';
import '../styles/Header.css';

export
const Header = (props) => {
  console.log(props);
  return (
    <Router>
      <div>
        <Menus foodState={props.foodState} />
        <div className="header">
          <div className="header-content">
            <NavLink to="/"> <img
              className="header-image"
              src="http://1.bp.blogspot.com/-gkjGxGOkj8U/U6EeZEvoQPI/AAAAAAAABUY/AT-Jqr7BIVI/s1600/tpymy.png"
              alt="hello"
            /><br /></NavLink>
            <div className="header-links">
              <NavLink
                className="active"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
                to="/pizza"
              > Pizza<br /></NavLink>
              <NavLink
                className="active"
                to="/meat"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
              > Meat<br /></NavLink>
              <NavLink
                className="active"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
                to="/hotmeal"
              > HotMeal<br /></NavLink>
              <NavLink
                className="active"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
                to="/salad"
              > Salads<br /></NavLink>
              <NavLink
                className="active"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
                to="/beer"
              > Beer<br /></NavLink>

            </div>
          </div>

        </div>
      </div>
    </Router>
  );
};
