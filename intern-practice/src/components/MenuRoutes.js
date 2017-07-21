import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menu from '../containers/Menu';
import { MainMenu } from './MainMenu';
import { InfoMenu } from './InfoMenu';
export
class MenuRoutes extends Component {


  render() {
    return (
      <div>
        <Route exact path="/pizza" render={() => <Menu type="pizza" />} />
        <Route exact path="/meat" render={() => <Menu type="meat" />} />
        <Route exact path="/hotmeal" render={() => <Menu type="hotMeal" />} />
        <Route exact path="/salad" render={() => <Menu type="salad" />} />
        <Route exact path="/beer" render={() => <Menu info={this.props.foodState} />} />
        <Route exact path="/" component={MainMenu} />
        <Route exact path="/info" component={InfoMenu} />
      </div>

    );
  }
}
