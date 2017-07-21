import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink,
}
    from 'react-router-dom';
import '../styles/Header.css';
import ShopCardItems from '../components/ShopCardItems';

export
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container header-content">
          <div className="col-lg-3 col-md-8 col-sm-12 col-xs-9
                           col-xs-offset-3
                           col-sm-offset-3
                           col-md-offset-2
                           col-lg-offset-0"
          >
            <div className="row">
              <NavLink to="/"> <img
                className="header-image"
                src="http://1.bp.blogspot.com/-gkjGxGOkj8U/U6EeZEvoQPI/AAAAAAAABUY/AT-Jqr7BIVI/s1600/tpymy.png"
                alt="hello"
              /><br /></NavLink>
            </div>

          </div>


          <div className="col-lg-9 col-md-9 col-sm-9
                        col-xs-12 col-sm-offset-2 col-lg-offset-0 links"
          >

            <div className="info-links">
              <NavLink
                className="info-link"
                activeStyle={{
                  textDecoration: 'none',
                  color: '#7C7C7C',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  display: 'inline-block',
                  paddingLeft: '10px',
                }}
                to="/info"
              > About us<br />
              </NavLink>
              <NavLink
                className="info-link"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeighteight: 'bold',
                  fontSize: '20px',
                  color: '#7C7C7C',
                  display: 'inline-block',
                  paddingLeft: '10px',
                }}
                to="/info00"
              > Delivery<br />
              </NavLink>
              <NavLink
                className="info-link"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeighteight: 'bold',
                  fontSize: '20px',
                  color: '#7C7C7C',
                  display: 'inline-block',
                  paddingLeft: '10px',
                }}
                to="/info0"
              > Contacts<br />
              </NavLink>
            </div>

            <div className="row menu-links hidden-xs">
              <NavLink
                className="active"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: '#7C7C7C',
                }}
                to="/pizza"
              > Pizza<br />
              </NavLink>
              <NavLink
                className="active"
                to="/meat"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: '#7C7C7C',
                }}
              > Meat<br />
              </NavLink>
              <NavLink
                className="active"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: '#7C7C7C',
                }}
                to="/hotmeal"
              > HotMeal<br />
              </NavLink>
              <NavLink
                className="active"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: '#7C7C7C',
                }}
                to="/salad"
              > Salads<br />
              </NavLink>
              <NavLink
                className="active"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: '#7C7C7C',
                }}
                to="/beer"
              > Beer<br />
              </NavLink>
            </div>


            <div className="row">
              <div className="dropdown  col-xs-6 hidden-md hidden-lg hidden-sm">
                <button
                  className="dropdown-button dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >Menu
                    <span className="caret" />
                </button>
                <ul className="dropdown-menu" role="menu">
                  <NavLink
                    className="active"
                    activeStyle={{
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: '#7C7C7C',
                    }}
                    to="/pizza"
                  > Pizza<br />
                  </NavLink>
                  <NavLink
                    className="active"
                    to="/meat"
                    activeStyle={{
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: '#7C7C7C',
                    }}
                  > Meat<br />
                  </NavLink>
                  <NavLink
                    className="active"
                    activeStyle={{
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: '#7C7C7C',
                    }}
                    to="/hotmeal"
                  > HotMeal<br />
                  </NavLink>
                  <NavLink
                    className="active"
                    activeStyle={{
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: '#7C7C7C',
                    }}
                    to="/salad"
                  > Salads<br />
                  </NavLink>
                  <NavLink
                    className="active"
                    activeStyle={{
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: '#7C7C7C',
                    }}
                    to="/beer"
                  > Beer<br />
                  </NavLink>
                </ul>
              </div>
            </div>


            <div className="row">
              <div className="dropdown  col-xs-6 hidden-md hidden-lg hidden-sm">
                <button
                  className="dropdown-button dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >Shop Card
                          <span className="caret" /></button>
                <ul className="dropdown-menu" role="menu">
                  <ShopCardItems
                    onAddItem={this.props.onAddItem}
                    itemsArray={this.props.itemsArray}
                    onDeleteItem={this.props.onDeleteItem}
                  />
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}
