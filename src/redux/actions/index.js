import { CALL_API } from "../middleware/api";

export const GET_WORLDS_REQUEST = "GET_WORLDS_REQUEST";
export const GET_WORLDS_SUCCESS = "GET_WORLDS_SUCCESS";
export const GET_WORLDS_FAILURE = "GET_WORLDS_FAILURE";

// action creator
export const getWorlds = () => ({
  [CALL_API]: {
    types: [GET_WORLDS_REQUEST, GET_WORLDS_SUCCESS, GET_WORLDS_FAILURE],
    endpoint: "worlds",
    method: "get"
  }
});

export const getWorldsAction = () => (dispatch, getState) => {
  return dispatch(getWorlds());
};

export const ADD_WORLD_REQUEST = "ADD_WORLD_REQUEST";
export const ADD_WORLD_SUCCESS = "ADD_WORLD_SUCCESS";
export const ADD_WORLD_FAILURE = "ADD_WORLD_FAILURE";

export const addWorld = world => ({
  [CALL_API]: {
    types: [ADD_WORLD_REQUEST, ADD_WORLD_SUCCESS, ADD_WORLD_FAILURE],
    endpoint: "worlds",
    method: "post",
    data: world
  }
});

export const addWorldAction = (world, oldWorld) => (dispatch, getState) => {
  world.id = oldWorld && oldWorld.id;
  return dispatch(addWorld(world));
};

export const UPDATE_WORLD_REQUEST = "UPDATE_WORLD_REQUEST";
export const UPDATE_WORLD_SUCCESS = "UPDATE_WORLD_SUCCESS";
export const UPDATE_WORLD_FAILURE = "UPDATE_WORLD_FAILURE";

export const updateWorld = world => ({
  [CALL_API]: {
    types: [UPDATE_WORLD_REQUEST, UPDATE_WORLD_SUCCESS, UPDATE_WORLD_FAILURE],
    endpoint: "worlds",
    method: "post",
    data: world
  }
});

export const updateWorldAction = world => (dispatch, getState) => {
  return dispatch(updateWorld(world));
};

export const DELETE_WORLD_REQUEST = "DELETE_WORLD_REQUEST";
export const DELETE_WORLD_SUCCESS = "DELETE_WORLD_SUCCESS";
export const DELETE_WORLD_FAILURE = "DELETE_WORLD_FAILURE";

export const deleteWorld = id => ({
  [CALL_API]: {
    types: [DELETE_WORLD_REQUEST, DELETE_WORLD_SUCCESS, DELETE_WORLD_FAILURE],
    endpoint: "worlds",
    method: "delete",
    data: id
  }
});

export const deleteWorldAction = id => (dispatch, getState) => {
  return dispatch(deleteWorld(id));
};

export const ADD_TOPIC_REQUEST = "ADD_TOPIC_REQUEST";
export const ADD_TOPIC_SUCCESS = "ADD_TOPIC_SUCCESS";
export const ADD_TOPIC_FAILURE = "ADD_TOPIC_FAILURE";

export const addTopic = topic => ({
  [CALL_API]: {
    types: [ADD_TOPIC_REQUEST, ADD_TOPIC_SUCCESS, ADD_TOPIC_FAILURE],
    endpoint: "topics",
    method: "post",
    data: topic
  }
});

export const addTopicAction = topic => (dispatch, getState) => {
  return dispatch(addTopic(topic));
};

export const UPDATE_TOPIC_REQUEST = "UPDATE_TOPIC_REQUEST";
export const UPDATE_TOPIC_SUCCESS = "UPDATE_TOPIC_SUCCESS";
export const UPDATE_TOPIC_FAILURE = "UPDATE_TOPIC_FAILURE";

export const updateTopic = topic => ({
  [CALL_API]: {
    types: [UPDATE_TOPIC_REQUEST, UPDATE_TOPIC_SUCCESS, UPDATE_TOPIC_FAILURE],
    endpoint: "topics",
    method: "post",
    data: topic
  }
});

export const updateTopicAction = topic => (dispatch, getState) => {
  return dispatch(updateTopic(topic));
};

export const DELETE_TOPIC_REQUEST = "DELETE_TOPIC_REQUEST";
export const DELETE_TOPIC_SUCCESS = "DELETE_TOPIC_SUCCESS";
export const DELETE_TOPIC_FAILURE = "DELETE_TOPIC_FAILURE";

export const deleteTopic = topic => ({
  [CALL_API]: {
    types: [DELETE_TOPIC_REQUEST, DELETE_TOPIC_SUCCESS, DELETE_TOPIC_FAILURE],
    endpoint: "topics",
    method: "delete",
    data: topic
  }
});

export const deleteTopicAction = topic => (dispatch, getState) => {
  return dispatch(deleteTopic(topic));
};

export const ADD_MODULE_REQUEST = "ADD_MODULE_REQUEST";
export const ADD_MODULE_SUCCESS = "ADD_MODULE_SUCCESS";
export const ADD_MODULE_FAILURE = "ADD_MODULE_FAILURE";

export const addModule = mod => ({
  [CALL_API]: {
    types: [ADD_MODULE_REQUEST, ADD_MODULE_SUCCESS, ADD_MODULE_FAILURE],
    endpoint: "modules",
    method: "post",
    data: mod
  }
});

export const addModuleAction = mod => (dispatch, getState) => {
  return dispatch(addModule(mod));
};

export const UPDATE_MODULE_REQUEST = "UPDATE_MODULE_REQUEST";
export const UPDATE_MODULE_SUCCESS = "UPDATE_MODULE_SUCCESS";
export const UPDATE_MODULE_FAILURE = "UPDATE_MODULE_FAILURE";

export const updateModule = mod => ({
  [CALL_API]: {
    types: [
      UPDATE_MODULE_REQUEST,
      UPDATE_MODULE_SUCCESS,
      UPDATE_MODULE_FAILURE
    ],
    endpoint: "modules",
    method: "post",
    data: mod
  }
});

export const updateModuleAction = mod => (dispatch, getState) => {
  return dispatch(updateModule(mod));
};

export const DELETE_MODULE_REQUEST = "DELETE_MODULE_REQUEST";
export const DELETE_MODULE_SUCCESS = "DELETE_MODULE_SUCCESS";
export const DELETE_MODULE_FAILURE = "DELETE_MODULE_FAILURE";

export const deleteModule = mod => ({
  [CALL_API]: {
    types: [
      DELETE_MODULE_REQUEST,
      DELETE_MODULE_SUCCESS,
      DELETE_MODULE_FAILURE
    ],
    endpoint: "modules",
    method: "delete",
    data: mod
  }
});

export const deleteModuleAction = mod => (dispatch, getState) => {
  return dispatch(deleteModule(mod));
};

export const ADD_QUESTION_REQUEST = "ADD_QUESTION_REQUEST";
export const ADD_QUESTION_SUCCESS = "ADD_QUESTION_SUCCESS";
export const ADD_QUESTION_FAILURE = "ADD_QUESTION_FAILURE";

export const addQuestion = question => ({
  [CALL_API]: {
    types: [ADD_QUESTION_REQUEST, ADD_QUESTION_SUCCESS, ADD_QUESTION_FAILURE],
    endpoint: "questions",
    method: "post",
    data: question
  }
});

export const addQuestionAction = question => (dispatch, getState) => {
  return dispatch(addQuestion(question));
};

export const UPDATE_QUESTION_REQUEST = "UPDATE_QUESTION_REQUEST";
export const UPDATE_QUESTION_SUCCESS = "UPDATE_QUESTION_SUCCESS";
export const UPDATE_QUESTION_FAILURE = "UPDATE_QUESTION_FAILURE";

export const updateQuestion = question => ({
  [CALL_API]: {
    types: [
      UPDATE_QUESTION_REQUEST,
      UPDATE_QUESTION_SUCCESS,
      UPDATE_QUESTION_FAILURE
    ],
    endpoint: "questions",
    method: "post",
    data: question
  }
});

export const updateQuestionAction = question => (dispatch, getState) => {
  return dispatch(updateQuestion(question));
};

export const DELETE_QUESTION_REQUEST = "DELETE_QUESTION_REQUEST";
export const DELETE_QUESTION_SUCCESS = "DELETE_QUESTION_SUCCESS";
export const DELETE_QUESTION_FAILURE = "DELETE_QUESTION_FAILURE";

export const deleteQuestion = question => ({
  [CALL_API]: {
    types: [
      DELETE_QUESTION_REQUEST,
      DELETE_QUESTION_SUCCESS,
      DELETE_QUESTION_FAILURE
    ],
    endpoint: "questions",
    method: "delete",
    data: question
  }
});

export const deleteQuestionAction = question => (dispatch, getState) => {
  return dispatch(deleteQuestion(question));
};
