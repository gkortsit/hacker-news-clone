import { combineReducers } from "redux";

const defaultItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DEFAULT":
      return [...state, action.payload];
    default:
      return state;
  }
};

const newItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_NEW":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  defaultItems: defaultItemsReducer,
  newItems: newItemsReducer
});
