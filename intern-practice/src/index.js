import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {setCardList} from './redusers/CardListReducer'



const store = createStore(setCardList,[],  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store} ><App /></Provider>,
    document.getElementById('root')
);
