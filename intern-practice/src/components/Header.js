import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink,
}
    from 'react-router-dom';
import '../styles/Header.css';

export
class Header extends Component {
  constructor() {
    super();
    this.totalCost = 0;
    this.state = {
      isClosed: true,
    };
  }

    setQuantityOfMeal = (name,value)=>{
        for (let i = this.props.itemsArray.length - 1; i >= 0; i--) {
            if (this.props.itemsArray[i].itemName === name) {
                this.props.onAddItem(this.props.itemsArray[i].itemName, this.props.itemsArray[i].itemCost,
                    value, this.props.itemsArray[i].itemState)
            }
        }
    };

    setCardHeader = ()=>{
        if(this.props.itemsArray.length>0)
            return(<h3 style={{borderBottom:'2px solid white'}}>Your Shop Card</h3>);
        else
            return(<h3 style={{borderBottom:'2px solid white'}}>Card is empty</h3>)
    };



    render() {
        const myArray = this.props.itemsArray.map(item => item.itemQuantity * item.itemCost);
        this.totalCost = myArray.reduce((sum, current) => sum + current, 0);

        if(this.props.itemsArray.length>0)
            this.props.itemsArray.sort((a, b)=>{
                if(a.itemName > b.itemName)
                    return 1;
                else
                    return -1;
            });


        const Header = this.setCardHeader();
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
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 col-sm-offset-2 col-lg-offset-0 links">
            <div className="info-links">
              <NavLink
                className="info-link"
                activeStyle={{
                  textDecoration: 'none',
                  color: '#7C7C7C',
                  fontWeighteight: 'bold',
                  fontSize: '20px',
                  display: 'inline-block',
                  paddingLeft: '10px',
                }}
                to="/info"
              > About us<br /></NavLink>
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
              > Delivery<br /></NavLink>
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
              > Contacts<br /></NavLink>
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
              <div className="row">
            <div className="dropdown  col-xs-6 hidden-md hidden-lg hidden-sm">
              <button
                className="dropdown-button dropdown-toggle"
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
              <div className="row">
                  <div className="dropdown  col-xs-6 hidden-md hidden-lg hidden-sm">
                      <button
                          className="dropdown-button dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                      >Menu
                          <span className="caret" /></button>
                      <ul className="dropdown-menu" role="menu">
                          {Header}
                          <div className="card-items">
                              {this.props.itemsArray.map(item =>{
                                  return(
                                      <div>
                                          <div className="card-item">
                                              <div className="card-item-image">
                                                  <img src={item.itemImg} style={{width: '29px', height:'23.13px'}}/>
                                              </div>
                                              <div className="card-name">
                                                  <a className="card-link">
                                                      {item.itemName}
                                                  </a>
                                              </div>
                                              {/* <li className="card-quantity">Q:{item.itemQuantity}, </li>*/}
                                              <input type="text"

                                                     onChange={(e)=>this.setQuantityOfMeal(item.itemName,e.target.value)}
                                                     style={{ marginRight: '20px',position:'absolute',
                                                         left:'180px',borderRadius:'20%',marginTop: '2px' }}
                                                     value={item.itemQuantity}
                                              />
                                              <div className="card-cost">
                                                  {item.itemCost} USD
                                              </div>
                                              <button style={{position: 'absolute', left: '300px'}} onClick={()=>{this.props.onDeleteItem(item.itemName)}}>x</button>
                                          </div>
                                      </div>)})}
                          </div>
                          <div style={{fontSize:'130%', color: '#ED7B54',borderTop: '2px solid white'}}>
                              total Cost: {this.totalCost}
                          </div>
                      </ul>
                  </div>

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
  }
}
