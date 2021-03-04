import { CONFIG } from "@/config";
import { Container, Ticker } from "@createjs/EaselJS";
import { SnakeHead } from "../graphics/SnakeHead";
import { SnakePart } from "../graphics/SnakePart";
import { FoodGraphic } from "../graphics/FoodGraphic";
import { Snake } from "../models/Snake";
import { Food } from "../models/Food";

export class World {
  constructor(stage) {
    this.stage = stage;
    this.isPaused = true;

    this.snakeContainer = new Container();
    this.foodContainer = new Container();
    this.stage.addChild(this.snakeContainer, this.foodContainer);

    this.snake = new Snake();
    this.food = new Food();
    this.drawSnake();
    this.drawFood();

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

  drawFood() {
    this.foodContainer.removeAllChildren();
    const food = new FoodGraphic(this.food.position.x, this.food.position.y);
    this.foodContainer.addChild(food);
  }

  drawSnake() {
    this.snakeContainer.removeAllChildren();
    this.snake.position.forEach(({ x, y }, index) => {
      const part = index === 0 ? new SnakeHead(x, y) : new SnakePart(x, y);
      this.snakeContainer.addChild(part);
    });
    this.stage.update();
  }

  checkFoodCollision() {
    return this.snake.head.x === this.food.position.x && this.snake.head.y === this.food.position.y;
  }

  checkBordersCollision() {
    return (
      this.snake.head.x > CONFIG.canvasWidth ||
      this.snake.head.x < 0 ||
      this.snake.head.y > CONFIG.canvasHeight ||
      this.snake.head.y < 0
    );
  }

  checkSelfCollision() {
    for (let i = 1; i < this.snake.position.length; i++) {
      if (this.snake.position[i].x === this.snake.head.x && this.snake.position[i].y === this.snake.head.y) {
        return true;
      }
    }

    return false;
  }

  checkSnakeCollision() {
    return this.checkBordersCollision() || this.checkSelfCollision();
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

    if (this.checkFoodCollision()) {
      this.snake.grow();
      this.food.generateRandomPosition();
      this.drawFood();
    }

    if (!this.checkSnakeCollision()) {
      this.snake.move();
      this.drawSnake();
    } else {
      this.snake.stop();
      document.removeEventListener("keydown", this.handleKeydown.bind(this));
    }
  }
}
