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

const initialState = [];

export const worlds = (state = initialState, action) => {
  if (action.response && action.type === ADD_WORLD_SUCCESS) {
    return [...state, { ...action.response, ...action.data }];
  }

  if (action.response && action.type === UPDATE_WORLD_SUCCESS) {
    return [...state].map(value =>
      value.id === action.response.id ? action.response : value
    );
  }

  if (action.response && action.type === DELETE_WORLD_SUCCESS) {
    const data = state.filter(world => world.id !== action.response.id);
    return data;
  }

  if (action.response && action.type === ADD_TOPIC_SUCCESS) {
    const world = findLast(state, value => value.id === action.data.worldId);
    if (!world.topics) world.topics = [];
    world.topics.push({
      ...action.data,
      ...action.response
    });
    world.playlistCount = world.topics.length;
    return [...state];
  }

  if (action.response && action.type === UPDATE_TOPIC_SUCCESS) {
    const world = findLast(state, value => value.id === action.data.worldId);
    const topic = findLast(
      world.topics,
      value => value.id === action.response.id
    );
    Object.assign(topic, action.data, action.response);
    return [...state];
  }

  if (action.response && action.type === DELETE_TOPIC_SUCCESS) {
    const world = findLast(state, value => value.id === action.data.worldId);
    remove(world.topics, value => value.id === action.response.id);
    world.playlistCount = world.topics.length;
    return [...state];
  }

  if (action.response && action.type === GET_WORLDS_SUCCESS) {
    return isEmpty(action.response.worlds) ? [] : [...action.response.worlds];
  }

  if (action.response && action.type === ADD_MODULE_SUCCESS) {
    const world = findLast(state, value => value.id === action.data.worldId);
    const topic = findLast(
      world.topics,
      value => value.id === action.data.topicId
    );
    if (!topic.modules) topic.modules = [];
    topic.modules.push({
      ...action.data,
      ...action.response
    });
    return [...state];
  }

  if (action.response && action.type === UPDATE_MODULE_SUCCESS) {
    const world = findLast(state, value => value.id === action.data.worldId);
    const topic = findLast(
      world.topics,
      value => value.id === action.data.topicId
    );
    const mod = findLast(
      topic.modules,
      value => value.id === action.response.id
    );
    Object.assign(mod, action.data, action.response);
    return [...state];
  }

  if (action.response && action.type === DELETE_MODULE_SUCCESS) {
    console.log(action);
    const world = findLast(state, value => value.id === action.data.worldId);
    const topic = findLast(
      world.topics,
      value => value.id === action.data.topicId
    );
    remove(topic.modules, value => value.id === action.response.id);
    // world.playlistCount = world.topics.length;
    return [...state];
  }

  if (action.response && action.type === ADD_QUESTION_SUCCESS) {
    const world = findLast(state, value => value.id === action.data.worldId);
    const topic = findLast(
      world.topics,
      value => value.id === action.data.topicId
    );
    const mod = findLast(
      topic.modules,
      value => value.id === action.data.moduleId
    );
    if (!mod.questions) mod.questions = [];
    mod.questions.push({
      ...action.data,
      ...action.response
    });
    return [...state];
  }

  if (action.response && action.type === UPDATE_QUESTION_SUCCESS) {
    console.log(action.response);
    const world = findLast(state, value => value.id === action.data.worldId);
    const topic = findLast(
      world.topics,
      value => value.id === action.data.topicId
    );
    const mod = findLast(
      topic.modules,
      value => value.id === action.data.moduleId
    );
    const question = findLast(
      mod.questions,
      value => value.id === action.response.id
    );
    Object.assign(question, action.data, action.response);
    return [...state];
  }

  if (action.response && action.type === DELETE_QUESTION_SUCCESS) {
    const world = findLast(state, value => value.id === action.data.worldId);
    const topic = findLast(
      world.topics,
      value => value.id === action.data.topicId
    );
    const mod = findLast(
      topic.modules,
      value => value.id === action.data.moduleId
    );
    remove(mod.questions, value => value.id === action.response.id);
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
  errorMessage
});

export default rootReducer;
