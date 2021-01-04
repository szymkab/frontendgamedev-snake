import { Container } from "@createjs/EaselJS";
import { SnakeHead } from "../graphics/SnakeHead";
import { SnakePart } from "../graphics/SnakePart";
import { Snake } from "../models/Snake";

export class World {
  constructor(stage) {
    this.stage = stage;

    this.snakeContainer = new Container();
    this.stage.addChild(this.snakeContainer);

    this.snake = new Snake();
    this.drawSnake();
  }

  drawSnake() {
    this.snakeContainer.removeAllChildren();
    this.snake.position.forEach(({ x, y }, index) => {
      const part = index === 0 ? new SnakeHead(x, y) : new SnakePart(x, y);
      this.snakeContainer.addChild(part);
    });
    this.stage.update();
  }
}
