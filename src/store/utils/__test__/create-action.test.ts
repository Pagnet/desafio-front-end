import { createAction } from "../action-creator";

describe("createAction util", () => {
  it("create an action without payload when it is not passed", () => {
    const actionCreator = createAction("my-action");

    expect(actionCreator()).toEqual({
      type: "my-action",
    });
  });

  it("create an action with payload when it is passed", () => {
    const actionCreator = createAction("my-action");

    expect(actionCreator("my-payload")).toEqual({
      type: "my-action",
      payload: "my-payload",
    });
  });
});
