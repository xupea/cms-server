import { normalize, schema } from "normalizr";
import { camelizeKeys } from "humps";
import axios from "axios";
import Qs from "qs";

// Extracts the next page URL from Github API response.
const getNextPageUrl = response => {
  const link = response.headers.get("link");
  if (!link) {
    return null;
  }

  const nextLink = link.split(",").find(s => s.indexOf('rel="next"') > -1);
  if (!nextLink) {
    return null;
  }

  return nextLink
    .trim()
    .split(";")[0]
    .slice(1, -1);
};

const API_ROOT = "http://localhost:8000/";

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (endpoint, method, data) => {
  let fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  if (data && typeof data != "object") {
    fullUrl += "/" + data;
  }

  console.log(data);

  return axios({
    url: fullUrl,
    method,
    headers: {
      // "Content-Type": "application/json"
      "Content-Type": "application/x-www-form-urlencoded"
    },
    transformRequest: [data => Qs.stringify(data)],
    data: data
  }).then(response => {
    console.log(response);
    // response.json().then(json => {
    //   if (!response.ok) {
    //     return Promise.reject(json);
    //   }

    //   const camelizedJson = camelizeKeys(json);
    //   const nextPageUrl = getNextPageUrl(response);

    //   return Object.assign({}, response.data);
    // });
    return response.data;
  });
};

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/paularmstrong/normalizr

// GitHub's API may return results with uppercase letters while the query
// doesn't contain any. For example, "someuser" could result in "SomeUser"
// leading to a frozen UI as it wouldn't find "someuser" in the entities.
// That's why we're forcing lower cases down there.

const userSchema = new schema.Entity(
  "users",
  {},
  {
    idAttribute: user => user.login.toLowerCase()
  }
);

const repoSchema = new schema.Entity(
  "repos",
  {
    owner: userSchema
  },
  {
    idAttribute: repo => repo.fullName.toLowerCase()
  }
);

// Schemas for Github API responses.
export const Schemas = {
  USER: userSchema,
  USER_ARRAY: [userSchema],
  REPO: repoSchema,
  REPO_ARRAY: [repoSchema]
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
