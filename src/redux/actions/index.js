import { CALL_API } from "../middleware/api";

export const GET_WORLDS_REQUEST = "GET_WORLDS_REQUEST";
export const GET_WORLDS_SUCCESS = "GET_WORLDS_SUCCESS";
export const GET_WORLDS_FAILURE = "GET_WORLDS_FAILURE";

// action creator
const getWorlds = () => ({
  [CALL_API]: {
    types: [GET_WORLDS_REQUEST, GET_WORLDS_SUCCESS, GET_WORLDS_FAILURE],
    endpoint: "worlds",
    method: "GET"
  }
});

export const getWorldsAction = () => (dispatch, getState) => {
  return dispatch(getWorlds());
};

export const ADD_WORLD_REQUEST = "ADD_WORLD_REQUEST";
export const ADD_WORLD_SUCCESS = "ADD_WORLD_SUCCESS";
export const ADD_WORLD_FAILURE = "ADD_WORLD_FAILURE";

const addWorld = world => ({
  [CALL_API]: {
    types: [ADD_WORLD_REQUEST, ADD_WORLD_SUCCESS, ADD_WORLD_FAILURE],
    endpoint: "worlds",
    method: "POST",
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

const updateWorld = world => ({
  [CALL_API]: {
    types: [UPDATE_WORLD_REQUEST, UPDATE_WORLD_SUCCESS, UPDATE_WORLD_FAILURE],
    endpoint: "worlds",
    method: "POST",
    data: world
  }
});

export const updateWorldAction = world => (dispatch, getState) => {
  return dispatch(updateWorld(world));
};

export const DELETE_WORLD_REQUEST = "DELETE_WORLD_REQUEST";
export const DELETE_WORLD_SUCCESS = "DELETE_WORLD_SUCCESS";
export const DELETE_WORLD_FAILURE = "DELETE_WORLD_FAILURE";

const deleteWorld = id => ({
  id,
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

export const RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE";

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
});
