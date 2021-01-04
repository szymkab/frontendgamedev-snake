import { CONFIG } from "@/config";

export class Snake {
  constructor() {
    this.position = [];

    for (let i = 0; i < CONFIG.snakeLength; i++) {
      this.position.unshift({ x: CONFIG.snakeSize + i * CONFIG.snakeSize, y: CONFIG.snakeSize * 3 });
    }
  }
}
