import { CONFIG } from "@/config";

export class Food {
  constructor() {
    this.generateRandomPosition();
  }

  generateRandomPosition() {
    const randomXPosition = Math.floor((Math.random() * CONFIG.canvasWidth) / CONFIG.snakeSize);
    const randomYPosition = Math.floor((Math.random() * CONFIG.canvasHeight) / CONFIG.snakeSize);

    this.position = {
      x: randomXPosition * CONFIG.snakeSize,
      y: randomYPosition * CONFIG.snakeSize,
    };
  }
}
