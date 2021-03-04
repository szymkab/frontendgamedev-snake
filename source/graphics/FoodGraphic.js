import { CONFIG } from "@/config";
import { Graphics, Shape } from "@createjs/EaselJS";

export class FoodGraphic {
  constructor(x, y) {
    const graphics = new Graphics()
      .beginFill("#396e3f")
      .setStrokeStyle(1)
      .beginStroke("#333333")
      .drawRoundRect(x, y, CONFIG.snakeSize, CONFIG.snakeSize, CONFIG.snakeSize / 2);
    const shape = new Shape(graphics);

    return shape;
  }
}
