import { createDOMStage, getDOMStage } from "./DOM";

describe("DOM", () => {
  it("creates canvas", () => {
    const canvas = createDOMStage();
    expect(canvas).toBeTruthy();
  });

  it("gets canvas", () => {
    const body = document.getElementsByTagName("body")[0];
    const canvas = createDOMStage();
    body.append(canvas);

    expect(getDOMStage()).toBeTruthy();
  });
});
