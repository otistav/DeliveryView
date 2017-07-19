
import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
}
  from 'react-router-dom';
import '../styles/Header.css';

export
const Header = props => (
  <div className="header">
    <div className="container header-content">
      <div className="col-lg-3 col-md-10 col-sm-10 col-xs-12">
        <div className="row">
          <NavLink to="/"> <img
            className="header-image"
            src="http://1.bp.blogspot.com/-gkjGxGOkj8U/U6EeZEvoQPI/AAAAAAAABUY/AT-Jqr7BIVI/s1600/tpymy.png"
            alt="hello"
          /><br /></NavLink>
        </div>
      </div>
      <div className="col-lg-9 col-md-10 col-sm-10 col-xs-12 links">
        <div className="info-links">44</div>
        <div className="row menu-links hidden-xs">
          <NavLink
            className="active"
            activeStyle={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#7C7C7C',
            }}
            to="/pizza"
          > Pizza<br /></NavLink>
          <NavLink
            className="active"
            to="/meat"
            activeStyle={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#7C7C7C',
            }}
          > Meat<br /></NavLink>
          <NavLink
            className="active"
            activeStyle={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#7C7C7C',
            }}
            to="/hotmeal"
          > HotMeal<br /></NavLink>
          <NavLink
            className="active"
            activeStyle={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#7C7C7C',
            }}
            to="/salad"
          > Salads<br /></NavLink>
          <NavLink
            className="active"
            activeStyle={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#7C7C7C',
            }}
            to="/beer"
          > Beer<br /></NavLink>
        </div>
        <div className="dropdown  col-ms-12 hidden-md hidden-lg hidden-sm">
          <button
            className="btn  btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >Menu
            <span className="caret" /></button>
          <ul className="dropdown-menu" role="menu">
            <NavLink
              className="active"
              activeStyle={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: '#7C7C7C',
              }}
              to="/pizza"
            > Pizza<br /></NavLink>
            <NavLink
              className="active"
              to="/meat"
              activeStyle={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: '#7C7C7C',
              }}
            > Meat<br /></NavLink>
            <NavLink
              className="active"
              activeStyle={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: '#7C7C7C',
              }}
              to="/hotmeal"
            > HotMeal<br /></NavLink>
            <NavLink
              className="active"
              activeStyle={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: '#7C7C7C',
              }}
              to="/salad"
            > Salads<br /></NavLink>
            <NavLink
              className="active"
              activeStyle={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: '#7C7C7C',
              }}
              to="/beer"
            > Beer<br /></NavLink>
          </ul>
        </div>

      </div>

    </div>
    {/* <div className="header">*/}
    {/* <div className="header-content">*/}

    {/* <div className="header-links">*/}


    {/* </div>*/}
    {/* </div>*/}

    {/* </div>*/}
  </div>
  );
