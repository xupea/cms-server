import { combineReducers } from "redux";
import findLast from "lodash/findLast";
import remove from "lodash/remove";
import isEmpty from "lodash/isEmpty";

import {
  DELETE_WORLD_SUCCESS,
  ADD_WORLD_SUCCESS,
  UPDATE_WORLD_SUCCESS,
  GET_WORLDS_SUCCESS,
  ADD_TOPIC_SUCCESS,
  UPDATE_TOPIC_SUCCESS,
  DELETE_TOPIC_SUCCESS,
  ADD_MODULE_SUCCESS,
  UPDATE_MODULE_SUCCESS,
  DELETE_MODULE_SUCCESS,
  ADD_QUESTION_SUCCESS,
  UPDATE_QUESTION_SUCCESS,
  DELETE_QUESTION_SUCCESS
} from "../actions";

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

  if (action.response && action.type === ADD_TOPIC_SUCCESS) {
    console.log(action.response);
    const world = findLast(state, value => value.id === action.response.wid);
    world.topics.push(action.response);
    world.playlistCount = world.topics.length;
    return [...state];
  }

  if (action.response && action.type === UPDATE_TOPIC_SUCCESS) {
    console.log(action.response);
    const world = findLast(state, value => value.id === action.response.wid);
    console.log(world);
    const topic = findLast(
      world.topics,
      value => value.id === action.response.id
    );
    Object.assign(topic, action.response);
    return [...state];
  }

  if (action.response && action.type === DELETE_TOPIC_SUCCESS) {
    console.log(action.response);
    const world = findLast(state, value => value.id === action.response.wid);
    remove(world.topics, value => value.id === action.response.id);
    world.playlistCount = world.topics.length;
    return [...state];
  }

  if (action.response && action.type === GET_WORLDS_SUCCESS) {
    console.log(action.response);
    return isEmpty(action.response) ? [] : [...action.response];
  }

  if (action.response && action.type === ADD_MODULE_SUCCESS) {
    console.log(action.response);
    const world = findLast(state, value => value.id === action.response.wid);
    const topic = findLast(
      world.topics,
      value => value.id === action.response.tid
    );
    topic.modules.push(action.response);
    return [...state];
  }

  if (action.response && action.type === UPDATE_MODULE_SUCCESS) {
    console.log(action.response);
    const world = findLast(state, value => value.id === action.response.wid);
    const topic = findLast(
      world.topics,
      value => value.id === action.response.tid
    );
    const mod = findLast(
      topic.modules,
      value => value.id === action.response.id
    );
    Object.assign(mod, action.response);
    return [...state];
  }

  if (action.response && action.type === DELETE_MODULE_SUCCESS) {
    const world = findLast(state, value => value.id === action.response.wid);
    const topic = findLast(
      world.topics,
      value => value.id === action.response.tid
    );
    remove(topic.modules, value => value.id === action.response.id);
    // world.playlistCount = world.topics.length;
    return [...state];
  }

  if (action.response && action.type === ADD_QUESTION_SUCCESS) {
    console.log(action.response);
    const world = findLast(state, value => value.id === action.response.wid);
    const topic = findLast(
      world.topics,
      value => value.id === action.response.tid
    );
    const mod = findLast(
      topic.modules,
      value => value.id === action.response.mid
    );
    mod.questions.push(action.response);
    return [...state];
  }

  if (action.response && action.type === UPDATE_QUESTION_SUCCESS) {
    console.log(action.response);
    const world = findLast(state, value => value.id === action.response.wid);
    const topic = findLast(
      world.topics,
      value => value.id === action.response.tid
    );
    const mod = findLast(
      topic.modules,
      value => value.id === action.response.mid
    );
    const question = findLast(
      mod.questions,
      value => value.id === action.response.id
    );
    Object.assign(question, action.response);
    return [...state];
  }

  if (action.response && action.type === DELETE_QUESTION_SUCCESS) {
    const world = findLast(state, value => value.id === action.response.wid);
    const topic = findLast(
      world.topics,
      value => value.id === action.response.tid
    );
    const mod = findLast(
      topic.modules,
      value => value.id === action.response.mid
    );
    remove(mod.questions, value => value.id === action.response.id);
    // world.playlistCount = world.topics.length;
    return [...state];
  }

  return state;
};

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  // const { type, error } = action;

  // if (type === RESET_ERROR_MESSAGE) {
  //   return null;
  // } else if (error) {
  //   return error;
  // }

  return state;
};

const rootReducer = combineReducers({
  worlds,
  // pagination,
  errorMessage
});

export default rootReducer;
