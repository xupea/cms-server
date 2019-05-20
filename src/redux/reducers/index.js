import { combineReducers } from "redux";
import {
  DELETE_WORLD_SUCCESS,
  ADD_WORLD_SUCCESS,
  UPDATE_WORLD_SUCCESS,
  GET_WORLDS_SUCCESS,
  RESET_ERROR_MESSAGE
} from "../actions";

const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const worlds = (state = [], action) => {
  if (action.response && action.type === ADD_WORLD_SUCCESS) {
    console.log(action.response);
    return [...state, action.response];
  }

  if (action.response && action.type === UPDATE_WORLD_SUCCESS) {
    console.log(action.response);
    return [...state].map(value =>
      value.id === action.response.id ? action.response : value
    );
  }

  if (action.response && action.type === DELETE_WORLD_SUCCESS) {
    const data = state.filter(world => world.id !== action.response.id);
    console.log(data);
    return data;
  }

  if (action.response && action.type === GET_WORLDS_SUCCESS) {
    console.log(action.response);
    return isEmpty(action.response) ? [] : [...action.response];
  }

  return state;
};

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};

// Updates the pagination data for different actions.
// const pagination = combineReducers({
//   starredByUser: paginate({
//     mapActionToKey: action => action.login,
//     types: [
//       ActionTypes.STARRED_REQUEST,
//       ActionTypes.STARRED_SUCCESS,
//       ActionTypes.STARRED_FAILURE
//     ]
//   }),
//   stargazersByRepo: paginate({
//     mapActionToKey: action => action.fullName,
//     types: [
//       ActionTypes.STARGAZERS_REQUEST,
//       ActionTypes.STARGAZERS_SUCCESS,
//       ActionTypes.STARGAZERS_FAILURE
//     ]
//   })
// });

const rootReducer = combineReducers({
  worlds,
  // pagination,
  errorMessage
});

export default rootReducer;
