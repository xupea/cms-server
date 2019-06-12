import axios from "axios";

const API_ROOT = "http://test.msservice.makeblock.com/";

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (endpoint, method, data) => {
  let fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  if (data && typeof data != "object") {
    fullUrl += "/" + data;
  }

  return axios({
    url: fullUrl,
    method,
    headers: {
      "Content-Type": "application/json",
      utoken: "xmxjhv6l"
    },
    data: data
  }).then(response => {
    return response.data.data;
  });
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = "Call API";

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === "undefined") {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { method, types, data } = callAPI;

  if (typeof endpoint === "function") {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== "string") {
    throw new Error("Specify a string endpoint URL.");
  }
  if (!method) {
    throw new Error("Specify one of the exported Method.");
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error("Expected an array of three action types.");
  }
  if (!types.every(type => typeof type === "string")) {
    throw new Error("Expected action types to be strings.");
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return callApi(endpoint, method, data).then(
    response =>
      next(
        actionWith({
          response,
          type: successType
        })
      ),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || "Something bad happened"
        })
      )
  );
};
