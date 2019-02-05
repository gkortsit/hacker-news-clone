import { combineReducers } from "redux";

const defaultItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DEFAULT":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const newItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_NEW":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const currentCommentListReducer = (state = [], action) => {
  switch (action.type) {
    case "SHOW_COMMENTS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const getCommentIdReducer = (currentID = null, action) => {
  switch (action.type) {
    case "CURRENT_ID":
      return action.payload;
    default:
      return currentID;
  }
};

export default combineReducers({
  defaultItems: defaultItemsReducer,
  newItems: newItemsReducer,
  currentCommentList: currentCommentListReducer,
  currentID: getCommentIdReducer
});
