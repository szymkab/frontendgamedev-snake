import { CONFIG } from "@/config";
import { Graphics, Shape } from "@createjs/EaselJS";

export class SnakePart {
  constructor(x, y) {
    const graphics = new Graphics()
      .beginFill("#fff")
      .setStrokeStyle(1)
      .beginStroke("#333333")
      .drawRoundRect(x, y, CONFIG.snakeSize, CONFIG.snakeSize, CONFIG.snakeSize / 10);
    const shape = new Shape(graphics);

    return shape;
  }
}
