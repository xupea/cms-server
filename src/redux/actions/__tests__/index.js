import * as actions from "../index";
import { CALL_API } from "../../middleware/api";

describe("actions", () => {
  it("should create an action to get all world data", () => {
    const expectedAction = {
      [CALL_API]: {
        types: [actions.GET_WORLDS_REQUEST, actions.GET_WORLDS_SUCCESS, actions.GET_WORLDS_FAILURE],
        endpoint: "worlds",
        method: "get"
      }
    };

    expect(actions.getWorlds()).toEqual(expectedAction);
  });

  it("should get all world data", () => {
    const dispatch = jest.fn();

    const expectedAction = {
      [CALL_API]: {
        types: [actions.GET_WORLDS_REQUEST, actions.GET_WORLDS_SUCCESS, actions.GET_WORLDS_FAILURE],
        endpoint: "worlds",
        method: "get"
      }
    };

    actions.getWorldsAction()(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("should create an action to add a new world", () => {
    const world = {};

    const expectedAction = {
      [CALL_API]: {
        types: [actions.ADD_WORLD_REQUEST, actions.ADD_WORLD_SUCCESS, actions.ADD_WORLD_FAILURE],
        endpoint: "worlds",
        method: "post",
        data: world
      }
    };

    expect(actions.addWorld(world)).toEqual(expectedAction);
  });

  it("should add a new world", () => {
    const dispatch = jest.fn();
    const world = {};

    const expectedAction = {
      [CALL_API]: {
        types: [actions.ADD_WORLD_REQUEST, actions.ADD_WORLD_SUCCESS, actions.ADD_WORLD_FAILURE],
        endpoint: "worlds",
        method: "post",
        data: world
      }
    };

    actions.addWorldAction(world)(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("should create an action to update an existing world", () => {
    const world = {};

    const expectedAction = {
      [CALL_API]: {
        types: [actions.UPDATE_WORLD_REQUEST, actions.UPDATE_WORLD_SUCCESS, actions.UPDATE_WORLD_FAILURE],
        endpoint: "worlds",
        method: "post",
        data: world
      }
    };

    expect(actions.updateWorld(world)).toEqual(expectedAction);
  });

  it("should update an existing world", () => {
    const dispatch = jest.fn();
    const world = {};

    const expectedAction = {
      [CALL_API]: {
        types: [actions.UPDATE_WORLD_REQUEST, actions.UPDATE_WORLD_SUCCESS, actions.UPDATE_WORLD_FAILURE],
        endpoint: "worlds",
        method: "post",
        data: world
      }
    };

    actions.updateWorldAction(world)(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("should create an action to delete a world", () => {
    const id = 'test-id';

    const expectedAction = {
      [CALL_API]: {
        types: [actions.DELETE_WORLD_REQUEST, actions.DELETE_WORLD_SUCCESS, actions.DELETE_WORLD_FAILURE],
        endpoint: "worlds",
        method: "delete",
        data: id
      }
    };

    expect(actions.deleteWorld(id)).toEqual(expectedAction);
  });

  it("should delete a world", () => {
    const dispatch = jest.fn();
    const id = 'test-id';

    const expectedAction = {
      [CALL_API]: {
        types: [actions.DELETE_WORLD_REQUEST, actions.DELETE_WORLD_SUCCESS, actions.DELETE_WORLD_FAILURE],
        endpoint: "worlds",
        method: "delete",
        data: id
      }
    };

    actions.deleteWorldAction(id)(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("should create an action to add a topic", () => {
    const topic = {};

    const expectedAction = {
      [CALL_API]: {
        types: [actions.ADD_TOPIC_REQUEST, actions.ADD_TOPIC_SUCCESS, actions.ADD_TOPIC_FAILURE],
        endpoint: "topics",
        method: "post",
        data: topic
      }
    };

    expect(actions.addTopic(topic)).toEqual(expectedAction);
  });

  it("should add a topic", () => {
    const dispatch = jest.fn();
    const topic = {};

    const expectedAction = {
      [CALL_API]: {
        types: [actions.ADD_TOPIC_REQUEST, actions.ADD_TOPIC_SUCCESS, actions.ADD_TOPIC_FAILURE],
        endpoint: "topics",
        method: "post",
        data: topic
      }
    };

    actions.addTopicAction(topic)(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("should create an action to update a topic", () => {
    const topic = {};

    const expectedAction = {
      [CALL_API]: {
        types: [actions.UPDATE_TOPIC_REQUEST, actions.UPDATE_TOPIC_SUCCESS, actions.UPDATE_TOPIC_FAILURE],
        endpoint: "topics",
        method: "post",
        data: topic
      }
    };

    expect(actions.updateTopic(topic)).toEqual(expectedAction);
  });

  it("should update a topic", () => {
    const dispatch = jest.fn();
    const topic = {};

    const expectedAction = {
      [CALL_API]: {
        types: [actions.UPDATE_TOPIC_REQUEST, actions.UPDATE_TOPIC_SUCCESS, actions.UPDATE_TOPIC_FAILURE],
        endpoint: "topics",
        method: "post",
        data: topic
      }
    };

    actions.updateTopicAction(topic)(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("should create an action to delete a topic", () => {
    const topic = {};

    const expectedAction = {
      [CALL_API]: {
        types: [actions.DELETE_TOPIC_REQUEST, actions.DELETE_TOPIC_SUCCESS, actions.DELETE_TOPIC_FAILURE],
        endpoint: "topics",
        method: "delete",
        data: topic
      }
    };

    expect(actions.deleteTopic(topic)).toEqual(expectedAction);
  });

  it("should delete a topic", () => {
    const dispatch = jest.fn();
    const topic = {};

    const expectedAction = {
      [CALL_API]: {
        types: [actions.DELETE_TOPIC_REQUEST, actions.DELETE_TOPIC_SUCCESS, actions.DELETE_TOPIC_FAILURE],
        endpoint: "topics",
        method: "delete",
        data: topic
      }
    };

    actions.deleteTopicAction(topic)(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expectedAction);
  });
});
