import { CALL_API, Schemas } from "../middleware/api";

export const GET_WORLDS_REQUEST = "GET_WORLDS_REQUEST";
export const GET_WORLDS_SUCCESS = "GET_WORLDS_SUCCESS";
export const GET_WORLDS_FAILURE = "GET_WORLDS_FAILURE";

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

export const addWorldAction = world => (dispatch, getState) => {
  return dispatch(addWorld(world));
};

export const UPDATE_WORLD_REQUEST = "UPDATE_WORLD_REQUEST";
export const UPDATE_WORLD_SUCCESS = "UPDATE_WORLD_SUCCESS";
export const UPDATE_WORLD_FAILURE = "UPDATE_WORLD_FAILURE";
export const ADD_WORLD = "ADD_WORLD";

const updateWorld = world => ({
  type: ADD_WORLD,
  payload: [world]
});

// Fetches a single repository from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const configWorld = world => (dispatch, getState) => {
  // const repo = getState().entities.repos[fullName]
  // if (repo && requiredFields.every(key => repo.hasOwnProperty(key))) {
  //   return null
  // }

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

export const STARGAZERS_REQUEST = "STARGAZERS_REQUEST";
export const STARGAZERS_SUCCESS = "STARGAZERS_SUCCESS";
export const STARGAZERS_FAILURE = "STARGAZERS_FAILURE";

// Fetches a page of stargazers for a particular repo.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchStargazers = (fullName, nextPageUrl) => ({
  fullName,
  [CALL_API]: {
    types: [STARGAZERS_REQUEST, STARGAZERS_SUCCESS, STARGAZERS_FAILURE],
    endpoint: nextPageUrl,
    schema: Schemas.ADD_WORLD_ARRAY
  }
});

// Fetches a page of stargazers for a particular repo.
// Bails out if page is cached and user didn't specifically request next page.
// Relies on Redux Thunk middleware.
export const loadStargazers = (fullName, nextPage) => (dispatch, getState) => {
  const { nextPageUrl = `repos/${fullName}/stargazers`, pageCount = 0 } =
    getState().pagination.stargazersByRepo[fullName] || {};

  if (pageCount > 0 && !nextPage) {
    return null;
  }

  return dispatch(fetchStargazers(fullName, nextPageUrl));
};

export const RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE";

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
});
