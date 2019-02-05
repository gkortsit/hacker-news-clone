import axios from "axios";

export const fetchDefaultItems = () => async dispatch => {
  const response = await axios.get("https://api.hnpwa.com/v0/news/1.json");
  dispatch({ type: "FETCH_DEFAULT", payload: response.data });
};

export const fetchNewItems = () => async dispatch => {
  const response = await axios.get("https://api.hnpwa.com/v0/newest/1.json");
  dispatch({ type: "FETCH_NEW", payload: response.data });
};

export const showCommentList = id => async dispatch => {
  const response = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);
  dispatch({ type: "SHOW_COMMENTS", payload: response.data.comments });
};

export const getCommentId = id => {
  return {
    type: "CURRENT_ID",
    payload: id
  };
};
