import { calculateScale } from "./resize";

describe("resize", () => {
  it("calculates scale correctly", () => {
    window.innerWidth = 3840;
    window.innerHeight = 2160;

    expect(calculateScale()).toBe(2);

    window.innerHeight = 1080;

    expect(calculateScale()).toBe(1);

    window.innerWidth = 1440;

    expect(calculateScale()).toBe(0.75);
  });
});
