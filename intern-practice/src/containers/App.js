
import React, { Component } from 'react';
import '../index.css';
import axios from 'axios';
import { connect } from 'react-redux';
import SideShopCart from '../components/SideShopCart';
import { Header } from '../components/Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min';
import { MenuRoutes } from '../components/MenuRoutes';
import {
  BrowserRouter as Router,
}
  from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    this.props.onGetItems();
  }


  render() {
    return (
      <Router>
        <div>
          <MenuRoutes foodState={this.props.foodState} />
          <Header
            foodState={this.props.foodState}
            itemsArray={this.props.itemsInCard}
            onAddItem={this.props.onAddItem}
            onDeleteItem={this.props.onDeleteItem}
          />
          <SideShopCart
            onAddItem={this.props.onAddItem}
            itemsArray={this.props.itemsInCard}
            onDeleteItem={this.props.onDeleteItem}
          />

        </div>
      </Router>
    );
  }
}

export default connect(
    state => ({
      itemsInCard: state.cardItemList,
      foodState: state.beer,
    }),
  dispatch => ({
    onGetItems: () => {
      const GetBeer = () => {
                  // transformBeerList is a func which adds a costs of beer in props object
        const transformBeerList = (array) => {
          let i = -1;
          const beerCostArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
          return array.data.map((item) => {
            i++;
            return {
              name: item.name,
              description: item.tagline,
              quantity: 0,
              img: item.image_url,
              state: false,
              cost: beerCostArray[i],
            };
          });
        };

        return (dispatch) => {
          dispatch({ type: 'FETCH_BEER_START' });
          axios.get('https://api.punkapi.com/v2/beers')
                          .then((response) => {
                            response.data = transformBeerList(response);
                            dispatch({ type: 'RECEIVE_BEER', payload: response.data });
                          });
        };
      };
      dispatch(GetBeer());
    },
    onAddItem: (name, cost, quantity, mystate, img) => {
      if (quantity > 0) {
        dispatch({
          type: 'ADD_ITEM',
          item: {
            itemName: name,
            itemQuantity: quantity,
            itemCost: cost,
            itemState: mystate,
            itemImg: img,
          },
        });
      } else {
        dispatch({
          type: 'ADD_ITEM',
          item: {
            itemName: name,
            itemQuantity: 1,
            itemCost: cost,
            itemState: mystate,
            itemImg: img,
          },
        });
      }
    },
    onDeleteItem: (name) => {
      dispatch({ type: 'DELETE_ITEM', itemName: name });
    },
  }),

)(App);
