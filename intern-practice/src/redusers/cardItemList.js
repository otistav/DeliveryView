export default
function cardItemList(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      if (action.item.itemState) {
        state = state.filter(item => item.itemName !== action.item.itemName);
      }
      return [
        ...state,
        action.item,
      ];
    } break;
    case 'DELETE_ITEM': {
      for (let i = state.length - 1; i >= 0; i--) {
        if (state[i].itemName === action.itemName && state[i].itemQuantity > 0) {
          state[i].itemQuantity--;
        }
        if (state[i].itemQuantity === 0) { state.splice(i, 1); }
      }
      return [
        ...state,
      ];
    } break;

    default:return state; break;
  }
}
