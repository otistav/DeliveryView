
import React, { Component } from 'react';
import '../index.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { ShopCard } from '../components/ShopCard';
import { Header } from '../components/Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  componentDidMount() {
    this.props.onGetItems();
  }


  render() {
    return (
        <div>
          {/* <h1>{this.props.ItemState.length}</h1>*/}
          <Header foodState={this.props.foodState} />
          <ShopCard ItemsArray={this.props.ItemState} />

        </div>
    );
  }
}

export default connect(
    state => ({
      ItemState: state.itemList,
      foodState: state.beer,
    }),
    dispatch => ({
      onGetItems: () => {
        const GetBeer = () => {
          const transformBeerList = (array) => {
            console.log('this is beerlist', array);
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


                        //     setTimeout(() => {
                        //         console.log('I got items');
                        //         dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: [] });
                        //     }, 2000)
          };
        };
        dispatch(GetBeer());
      },
    }),


)(App);
