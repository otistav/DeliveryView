export const setCardList = (state = [], action)=>{
    switch(action.type){
        case 'ADD_ITEM':{
            return[
                ...state,
                action.item
            ]
        }break;
        case 'ADD_COST':{
            return[
                ...state,
                action.itemCost
            ]
        }break;
        case 'ADD_Q':{
            return[
                ...state,
                action.itemQuantity
            ]
        }break;
        default:return state;break;
    }

};