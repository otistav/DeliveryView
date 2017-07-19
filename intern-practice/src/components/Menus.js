/**
 * Created by sam on 13.07.17.
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menu from '../containers/Menu';
import { MainMenu } from './MainMenu';
import {
  BrowserRouter as Router,
}
  from 'react-router-dom';

export
class Menus extends Component {


  render() {
    return (
      <div>
        <Route exact path="/pizza" render={() => <Menu type="pizza" />} />
        <Route exact path="/meat" render={() => <Menu type="meat" />} />
        <Route exact path="/hotmeal" render={() => <Menu type="hotMeal" />} />
        <Route exact path="/salad" render={() => <Menu type="salad" />} />
        <Route exact path="/beer" render={() => <Menu info={this.props.foodState} />} />
        <Route exact path="/" component={MainMenu} />
      </div>

    );
  }
}
