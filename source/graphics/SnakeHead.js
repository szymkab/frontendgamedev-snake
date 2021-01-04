import { CONFIG } from "@/config";
import { Graphics, Shape } from "@createjs/EaselJS";

export class SnakeHead {
  constructor(x, y) {
    const graphics = new Graphics()
      .beginFill("#000")
      .setStrokeStyle(1)
      .beginStroke("#000000")
      .drawRoundRect(x, y, CONFIG.snakeSize, CONFIG.snakeSize, CONFIG.snakeSize / 10);
    const shape = new Shape(graphics);

    return shape;
  }
}
