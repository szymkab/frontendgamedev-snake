import { Container, Ticker } from "@createjs/EaselJS";
import { SnakeHead } from "../graphics/SnakeHead";
import { SnakePart } from "../graphics/SnakePart";
import { Snake } from "../models/Snake";

export class World {
  constructor(stage) {
    this.stage = stage;
    this.isPaused = true;

    this.snakeContainer = new Container();
    this.stage.addChild(this.snakeContainer);

    this.snake = new Snake();
    this.drawSnake();

    Ticker.on("tick", this.render.bind(this));
    document.addEventListener("keydown", this.handleKeydown.bind(this));
  }

  handleKeydown(event) {
    if (event.keyCode === 32) {
      if (this.isPaused) {
        this.resumeGame();
      } else {
        this.pauseGame();
      }
    } else {
      if (!this.isPaused) {
        this.changeDirection(event);
      }
    }
  }

  changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = this.snake.direction === "UP";
    const goingDown = this.snake.direction === "DOWN";
    const goingRight = this.snake.direction === "RIGHT";
    const goingLeft = this.snake.direction === "LEFT";

    if (keyPressed === LEFT_KEY && !goingRight) {
      this.snake.changeDirection("LEFT");
    }

    if (keyPressed === UP_KEY && !goingDown) {
      this.snake.changeDirection("UP");
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
      this.snake.changeDirection("RIGHT");
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
      this.snake.changeDirection("DOWN");
    }
  }

  drawSnake() {
    this.snakeContainer.removeAllChildren();
    this.snake.position.forEach(({ x, y }, index) => {
      const part = index === 0 ? new SnakeHead(x, y) : new SnakePart(x, y);
      this.snakeContainer.addChild(part);
    });
    this.stage.update();
  }

  pauseGame() {
    this.isPaused = true;
    this.snake.stop();
  }

  resumeGame() {
    this.isPaused = false;
    this.snake.start();
  }

  render() {
    this.stage.update();

    if (this.isPaused) {
      return;
    }

    this.snake.move();
    this.drawSnake();
  }
}
