/**
 * Created by sam on 13.07.17.
 */
import React from 'react';

export
const dispatch = dispatch => ({
  onAddItem: (name, cost, quantity) => {
    dispatch({ type: 'ADD_NAME', itemName: name });
    dispatch({ type: 'ADD_COST', itemCost: cost });
    dispatch({ type: 'ADD_Q', itemQuantity: quantity });
  },
});

