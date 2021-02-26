import { CONFIG } from "@/config";

export class Snake {
  constructor() {
    this.position = [];
    this.isMoving = true;
    this.direction = "RIGHT";

    for (let i = 0; i < CONFIG.snakeLength; i++) {
      this.position.unshift({ x: CONFIG.snakeSize + i * CONFIG.snakeSize, y: CONFIG.snakeSize * 3 });
    }
  }

  get delta() {
    switch (this.direction) {
      case "RIGHT":
        return {
          x: CONFIG.snakeSize,
          y: 0,
        };
      case "LEFT":
        return {
          x: -CONFIG.snakeSize,
          y: 0,
        };
      case "UP":
        return { x: 0, y: -CONFIG.snakeSize };
      case "DOWN":
        return { x: 0, y: CONFIG.snakeSize };
      default:
        return { x: 0, y: 0 };
    }
  }

  get head() {
    return this.position[0];
  }

  changeDirection(direction) {
    this.direction = direction;
  }

  move() {
    if (this.isMoving) {
      const head = { x: this.head.x + this.delta.x, y: this.head.y + this.delta.y };
      this.position.unshift(head);
      this.position.pop();
    }
  }

  start() {
    this.isMoving = true;
  }

  stop() {
    this.isMoving = false;
  }
}
